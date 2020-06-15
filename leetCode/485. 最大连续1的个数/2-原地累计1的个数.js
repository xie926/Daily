var findMaxConsecutiveOnes = function(nums) {
  for(let i = 0; i < nums.length; i++){
      if(nums[i]){
          nums[i] += nums[i-1] || 0
      }
  }
  return Math.max(...nums)
};