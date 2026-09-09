const fs = require('fs');
const path = require('path');
async function init() {
  const src = path.join(__dirname, '..', 'templates', 'deploy.yaml');
  const dest = path.join(process.cwd(), '.github', 'workflows', 'deploy.yaml');
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Created .github/workflows/deploy.yaml');
}
module.exports = { init };
