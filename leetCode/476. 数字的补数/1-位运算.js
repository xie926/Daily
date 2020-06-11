// 稍微取巧了一下，5的二进制'101'与'111'作异或运算刚好是补数'010'
// 算是发现的一种规律吧

var findComplement = function(num) {
  var arr = []
  arr.length = num.toString(2).length
  arr.fill(1)
  var flag = parseInt(arr.join('').toString(), 2)
  return flag ^ num
};