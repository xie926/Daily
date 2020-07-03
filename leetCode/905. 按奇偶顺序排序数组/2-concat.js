var sortArrayByParity = function(A) {
  let arr = [], arr1 = []
  A.forEach((item) => {
      if(item % 2 === 0){
          arr.push(item)
      }else{
          arr1.push(item)
      }
  })
  return arr.concat(arr1)
};