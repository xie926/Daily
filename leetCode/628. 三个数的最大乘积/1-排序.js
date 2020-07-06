var maximumProduct = function(nums) {
  nums.sort((a,b) => a-b)
  let index =nums.length - 1;
  let result1 = nums[0] * nums[1] * nums[index]
  let result2 = nums[index] * nums[index-1] * nums[index-2]
  return Math.max(result2, result1)
};