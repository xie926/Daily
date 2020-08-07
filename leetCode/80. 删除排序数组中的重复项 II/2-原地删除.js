/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for(let i = 2; i < nums.length; i++){
      if(nums[i] === nums[i-2]){
          nums.splice(i, 1)
          i--
      }
  }
  return nums.length
};