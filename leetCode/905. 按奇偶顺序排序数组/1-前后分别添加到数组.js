var sortArrayByParity = function(A) {
  let arr = []
  A.forEach((item) => {
      if(item % 2 === 0){
          arr.unshift(item)
      }else{
          arr.push(item)
      }
  })
  return arr
};