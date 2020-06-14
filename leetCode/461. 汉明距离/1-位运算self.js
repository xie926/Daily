var hammingDistance = function(x, y) {
  let flag = x ^ y, num = 0
  flag = flag.toString(2)
  for(let i = 0; i < flag.length; i++){
      if(flag[i] === '1'){
          num++
      }
  }
  return num
};