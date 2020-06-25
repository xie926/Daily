var missingNumber = function(nums) {
  let i = 0;
  while(i <= nums.length){
      if(nums.indexOf(i) === -1){
          return i
      }
      i++
  }
};