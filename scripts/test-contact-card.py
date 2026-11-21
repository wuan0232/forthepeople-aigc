import sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'.tmp/ga4-tools'))
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True)
 page=b.new_page()
 errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 page.route('**/*',lambda r:r.continue_() if r.request.url.startswith('http://localhost:3017') else r.abort())
 for path in ['/', '/contact','/practice-areas/car-accident']:
  for width in [1440,390]:
   page.set_viewport_size({'width':width,'height':900})
   page.goto('http://localhost:3017'+path)
   page.wait_for_load_state('networkidle')
   assert page.locator('.clinic-contact').count() > 0
   assert page.get_by_text('Show My Recovery Checklist',exact=True).count()==0
   ids=page.locator('[id]').evaluate_all('(els)=>els.map(e=>e.id)')
   assert len(ids)==len(set(ids)), (path,'duplicate IDs')
   for card in page.locator('.clinic-contact').all():
    for office,phone,address in [('syracuse','+19293993134','475 Irving'),('dallas','+12148846963','1140 Empire'),('nyc-flushing','+19293993134','42-65 Kissena')]:
     card.locator('select').select_option(office)
     assert card.locator('.clinic-contact__call').get_attribute('href')=='tel:'+phone
     assert address in card.locator('address').inner_text()
     from urllib.parse import unquote
     assert address in unquote(card.locator('.clinic-contact__map').get_attribute('href'))
   assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
 assert not errors,errors
 Path('.tmp/contact-card-evidence').mkdir(exist_ok=True)
 page.goto('http://localhost:3017/contact');page.wait_for_load_state('networkidle')
 page.locator('.clinic-contact').first.screenshot(path='.tmp/contact-card-evidence/mobile.png')
 b.close()
print('Contact cards passed: all offices, three page types, desktop and mobile, no duplicate IDs or JS errors.')
