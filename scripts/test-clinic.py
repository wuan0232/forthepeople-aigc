import sys, json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tmp/ga4-tools'))
from playwright.sync_api import sync_playwright
OUT = ROOT / '.tmp/clinic-evidence'
OUT.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True)
    context = browser.new_context()
    context.route('**/*', lambda r: r.continue_() if r.request.url.startswith('http://localhost:3013') else r.abort())
    context.route('**/g/collect**', lambda r: r.fulfill(status=204))
    context.route('**/gtag/js**', lambda r: r.fulfill(status=200, body=''))
    errors = []
    page = context.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    for width in [1440, 390]:
        page.set_viewport_size({'width':width, 'height':900})
        page.goto('http://localhost:3013/')
        page.wait_for_load_state('networkidle')
        assert page.locator('.resources img[src*="doctors"]').count() == 0
        assert page.locator('.resources img[src*="visit-preparation"]').count() >= 1
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), width
        button = page.get_by_role('button', name='How do I request an appointment?')
        button.click()
        assert button.get_attribute('aria-expanded') == 'true'
        button.click()
        assert button.get_attribute('aria-expanded') == 'false'
        assert page.locator('.office-maps a[href="tel:+12148846963"]').count() == 1
        page.locator('.resources').screenshot(path=str(OUT / f'resources-{width}.png'))
        page.screenshot(path=str(OUT / f'home-{width}.png'), full_page=True)
    events = page.evaluate("(window.dataLayer || []).filter(x => x[0] === 'event').map(x => x[1])")
    assert events.count('page_view') == 1, events
    assert events.count('clinic_faq_click') == 2, events
    card = page.locator('.hero .clinic-contact')
    card.locator('select').select_option('dallas')
    assert card.locator('.clinic-contact__call').get_attribute('href') == 'tel:+12148846963'
    page.goto('http://localhost:3013/locations')
    page.wait_for_load_state('networkidle')
    search = page.get_by_role('searchbox')
    search.fill('75247')
    page.locator('.loc-search button').click()
    assert page.locator('.loc-local__card').count() == 1
    assert 'Dallas Office' in page.locator('.loc-local__card').inner_text()
    search.fill('unknown city')
    page.locator('.loc-search button').click()
    assert page.locator('.loc-local [role=status]').is_visible()
    search.fill('')
    assert page.locator('.loc-local__card').count() == 3
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    for path in ['/contact','/legal-resources']:
        response = page.goto('http://localhost:3013'+path)
        page.wait_for_load_state('networkidle')
        assert response.status == 200
        assert 'Law Firm' not in page.title()
    page.goto('http://localhost:3013/blog')
    page.wait_for_load_state('networkidle')
    assert page.locator('#main-site-ga4').count() == 0
    assert not errors, errors
    (OUT/'results.json').write_text(json.dumps({'passed':True,'widths':[1440,390],'errors':errors,'analytics':'Local commands verified; remote scripts and collection intercepted'},indent=2))
    browser.close()
print('Clinic browser checks passed')


