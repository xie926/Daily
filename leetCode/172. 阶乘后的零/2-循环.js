var trailingZeroes = function (n) {
  let res = 0;
  while (n >= 5) {
    let k = Math.floor(n / 5);
    res += k;
    n = k;
  }
  return res;
};