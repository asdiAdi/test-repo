function sum(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new TypeError('sum(a, b) expects two finite numbers');
  }
  return x + y;
}

module.exports = { sum };
