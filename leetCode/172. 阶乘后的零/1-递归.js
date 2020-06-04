/*先考虑，尾数中的0是怎么来的？
  在1~9的范围内，选两个数字相乘，只有 2*5=10。所以，一对2和5，贡献一个0。
  不限制范围的话，一对2的倍数和5的倍数，贡献一个0
  阶乘中，2的倍数肯定比5的倍数多。所以，只需要考虑5的倍数出现了多少次
*/
var trailingZeroes = function (n) {
  if (n < 5) {
    return 0;
  } else {
    let k = Math.floor(n / 5);
    return k + trailingZeroes(k);
  }
};