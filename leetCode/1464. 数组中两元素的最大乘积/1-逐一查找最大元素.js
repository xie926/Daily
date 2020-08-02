/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(nums.length === 2) return (nums[0]-1)*(nums[1]-1)
  let n = 0, result = 1;
  while(n < 2){
      let a = nums.splice(nums.indexOf(Math.max.apply(null, nums)), 1)[0]
      result *= (a-1)
      n++
  }
  return result
};