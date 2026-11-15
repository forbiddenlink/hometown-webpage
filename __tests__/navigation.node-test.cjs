const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const source = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');
for (const pathname of ['/eat-drink', '/eat-drink/', '/eat-drink.html']) {
  test(`production navigation highlights food for ${pathname}`, () => {
    const dom = new JSDOM('<a data-nav="home"></a><a data-nav="food"></a>', {
      url: `https://unused.invalid${pathname}`, runScripts: 'outside-only'
    });
    try {
      dom.window.eval(source);
      assert.equal(dom.window.document.querySelector('[aria-current="page"]').dataset.nav, 'food');
    } finally { dom.window.close(); }
  });
}
