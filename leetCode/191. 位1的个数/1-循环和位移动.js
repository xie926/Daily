/*
时间复杂度：O（1）
空间复杂度：O（1）
任何数字跟掩码1进行逻辑与运算，都可以获得这个数字都最低位
检查下一位时，将掩码左移一位
0000 0000 0000 0000 0000 0000 0000 0001 =>
0000 0000 0000 0000 0000 0000 0000 0010
*/

var hammingWeight = function(n) {
  let count = 0, flag = 1;
  for(let i = 0; i < 32; i++){
    if(n & flag) count++;

    flag <<= 1
  }
  return count
};