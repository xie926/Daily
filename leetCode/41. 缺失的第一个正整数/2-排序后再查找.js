/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  let num = 1
  if (nums[len] <= 0) {
    return num
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      continue
    }
    if (nums[i] == num) {
      num++
    } else if (nums[i] > num) {
      return num
    }
  }
  return num
};