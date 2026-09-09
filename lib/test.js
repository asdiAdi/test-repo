const fs = require('fs');
const path = require('path');
const champions = require('../data/champions');
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
async function test() {
  const rows = champions.map(c =>
    `      <li><strong>${esc(c.name)}</strong> (${c.cost}-cost) — Traits: ${c.traits.map(esc).join(', ')}<br>${esc(c.ability)}</li>`
  ).join('\n');
  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>TFT Set 18 Champions</title></head>
<body>
  <h1>TFT Set 18: Enchanted Wilds — Champions</h1>
  <ol>
${rows}
  </ol>
</body>
</html>
`;
  const dest = path.join(process.cwd(), 'test.html');
  fs.writeFileSync(dest, html);
  console.log('Created test.html with ' + champions.length + ' champions');
}
module.exports = { test };
