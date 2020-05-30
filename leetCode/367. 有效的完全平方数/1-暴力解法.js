var isPerfectSquare = function(num) {
  if(num <= 4){
      if(num === 0 || num === 1 || num ===4) return true
      return false
  }
  let len = num/2
  for(let i = 0; i < len; i++){
      if(i*i === num) return true
  }
  return false
};