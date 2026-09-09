#!/usr/bin/env node
const { init, run, test, sum } = require('../lib');

const cmd = process.argv[2];

async function main() {
  switch (cmd) {
    case 'init': return await init();
    case 'run': return run();
    case 'test': return await test();
    case 'sum': {
      const a = process.argv[3];
      const b = process.argv[4];
      if (a === undefined || b === undefined) {
        console.error('Usage: <sum <a> <b>>');
        process.exitCode = 1;
        return;
      }
      console.log(sum(a, b));
      return;
    }
    default:
      console.log('Usage: <init|run|test|sum <a> <b>>');
      console.log('  init - scaffold .github/workflows/deploy.yaml');
      console.log('  run  - print Hello World');
      console.log('  test - scaffold test.html (TFT Set 18 champions)');
      console.log('  sum  - print sum of two numbers');
      process.exitCode = 1;
  }
}
main().catch((e) => { console.error(e.message); process.exit(1); });
