var missingNumber = function(nums) {
  let flag = nums.length;
  nums.sort((a,b) => a-b)
  nums.some((item, index) => {
      if(item !== index){
          flag = index
          return true
      }
  })
  return flag
};