var moveZeroes = function(nums) {
  let i = nums.indexOf(0)+1, j = nums.indexOf(0);
  if(j === -1) return nums
  while(i<nums.length){
      if(nums[i] !== 0){
          let temp = nums[i]
          nums[i] = nums[j]
          nums[j] = temp
          j++
      }
      i++
  }
  return nums
};