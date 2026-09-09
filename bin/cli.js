#!/usr/bin/env node
const { init } = require('../lib/init');
const { run } = require('../lib/run');
const { test } = require('../lib/test');

const cmd = process.argv[2];

async function main() {
  switch (cmd) {
    case 'init': return await init();
    case 'run': return run();
    case 'test': return await test();
    default:
      console.log('Usage: <init|run|test>');
      console.log('  init - scaffold .github/workflows/deploy.yaml');
      console.log('  run  - print Hello World');
      console.log('  test - scaffold test.html (TFT Set 18 champions)');
      process.exitCode = 1;
  }
}
main().catch((e) => { console.error(e.message); process.exit(1); });
