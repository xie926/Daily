/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(nums.length === 2) return (nums[0]-1)*(nums[1]-1)
  nums.sort((a,b) => b-a)

  return (nums[0]-1) * (nums[1] - 1)
};