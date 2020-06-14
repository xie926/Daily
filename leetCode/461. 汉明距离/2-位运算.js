var hammingDistance = function(x, y) {
  let flag = x ^ y, num = 0
  while(flag){
      num+=1
      flag = flag & (flag - 1)
  }
  return num
};