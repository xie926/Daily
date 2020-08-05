/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  // let min = Math.min.apply(null, nums)
  if(nums.length === 0) return 1
  let max = Math.max.apply(null, nums)
  if(max <= 0) return 1
  for(let i = 1; i <= max; i++){
      if(nums.indexOf(i) === -1){
          return i
      }
  }
  return (max+1)
};