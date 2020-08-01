/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  var arr = nums.splice(0, n)
  var result = []
  for(let i = 0; i < n; i++){
      result.push(arr[i])
      result.push(nums[i])
  }
  return result
};