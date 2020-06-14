var hammingDistance = function(x, y) {
  let flag = x ^ y, num = 0
  while(flag){
      if(flag & 1){
          num++
      }
      flag = flag >> 1
  }
  return num
};