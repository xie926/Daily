// 每次把数字最后一个二进制位1反转为0，sum++
// 当没有1可反的时候，数字变成了0
// n & (n-1)
// 清零最低位的1

// n数字的二进制的最低位的1总是对应n-1数字的二进制的0
// 相与后，其它位不变，当前位变成0

var hammingWeight = function(n) {
  let sum = 0
  while(n != 0){
      sum++
      n &= (n-1)
  }
  return sum
};