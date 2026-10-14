"""Local browser checks. Install Playwright in .tmp/ga4-tools before running."""
import json
import html
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tmp/ga4-tools'))
from playwright.sync_api import sync_playwright

OUT = ROOT / '.tmp/ga4-evidence'
OUT.mkdir(parents=True, exist_ok=True)
BASE = 'http://localhost:3000'
ID = 'G-WXLT70ZM7P'
results = []

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 1000})
    # Record outgoing analytics without polluting production reports with local tests.
    context.route('**/g/collect**', lambda route: route.fulfill(status=204))
    for name, path in [('home', '/'), ('detail', '/practice-areas/car-accident'),
                       ('contact', '/contact'), ('about', '/about'), ('blog', '/blog')]:
        page = context.new_page()
        errors, requests, responses = [], [], []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('request', lambda req: requests.append(req.url) if 'googletagmanager.com' in req.url else None)
        page.on('response', lambda res: responses.append({'url': res.url, 'status': res.status}) if 'googletagmanager.com' in res.url else None)
        page.goto(BASE + path)
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1000)
        snapshot = page.evaluate('''() => ({title: document.title,
          tags: [...document.head.querySelectorAll('script[src*="googletagmanager.com"]')].map(s => s.src),
          commands: (window.dataLayer || []).filter(c => c && (c[0] === 'config' || c[0] === 'event')).map(c => Array.from(c))})''')
        views = [c for c in snapshot['commands'] if c[0:2] == ['event', 'page_view']]
        assert len(views) == (0 if name == 'blog' else 1), snapshot
        assert len(snapshot['tags']) == (0 if name == 'blog' else 1), snapshot
        if views:
            assert views[0][2]['send_to'] == ID
            assert views[0][2]['page_title'] == snapshot['title']
            assert views[0][2]['page_location'] == BASE + path
        assert not errors, errors
        page.screenshot(path=str(OUT / f'{name}.png'), full_page=True)
        results.append({'page': path, 'snapshot': snapshot, 'tag_responses': responses, 'errors': errors})
        if name == 'home':
            # Real NuxtLink navigation exercises routing and title updates.
            page.locator('a[href="/practice-areas/car-accident"]').first.evaluate('(el) => el.click()')
            page.wait_for_url(BASE + '/practice-areas/car-accident')
            page.wait_for_timeout(1000)
            state = page.evaluate('''() => ({title: document.title, commands: (window.dataLayer || []).filter(c => c && c[0] === 'event' && c[1] === 'page_view').map(c => Array.from(c)), tags: document.head.querySelectorAll('#main-site-ga4').length})''')
            assert len(state['commands']) == 2 and state['tags'] == 1, state
            assert state['commands'][-1][2]['page_title'] == state['title'], state
            page.locator('a[href="/blog"]').first.evaluate('(el) => el.click()')
            page.wait_for_url(BASE + '/blog')
            page.wait_for_timeout(1000)
            assert page.evaluate("(window.dataLayer || []).filter(c => c && c[0] === 'event' && c[1] === 'page_view').length") == 2
            results.append({'spa_navigation': state, 'blog_navigation_no_additional_page_view': True})
        page.close()
    browser.close()

(OUT / 'results.json').write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding='utf-8')
rows = []
for result in results:
    if 'page' not in result:
        continue
    for response in result['tag_responses']:
        if '/gtag/js?' in response['url']:
            rows.append(f"<tr><td>{html.escape(result['page'])}</td><td>{response['status']}</td><td>{html.escape(response['url'])}</td></tr>")
report = '''<!doctype html><meta charset="utf-8"><style>
body{font:16px Arial;padding:32px;color:#172c40}table{border-collapse:collapse;width:100%}
td,th{border:1px solid #ccd5de;padding:14px;text-align:left}h1{font-size:26px}
</style><h1>Local GA4 browser Network verification</h1>
<p>Environment: http://localhost:3000 — production build</p>
<p>Captured browser response events; this report is not a DevTools screenshot.</p>
<table><tr><th>Page</th><th>HTTP status</th><th>Google tag request URL</th></tr>''' + ''.join(rows) + '''</table>
<p>/blog: no new Google tag request. SPA commands: one per tracked page, correct URL and title.</p>
<p>Local collection requests were intercepted. GA4 server receipt and production deployment are not verified.</p>'''
(OUT / 'network-report.html').write_text(report, encoding='utf-8')
with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True)
    page = browser.new_page(viewport={'width': 1400, 'height': 700})
    page.set_content(report)
    page.screenshot(path=str(OUT / 'network-report.png'), full_page=True)
    browser.close()
print(json.dumps(results, ensure_ascii=False, indent=2))
