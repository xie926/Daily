/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length === 3) return (nums[0] + nums[1] + nums[2])
  nums.sort((a, b) => a - b)
  let min = Infinity, res;
  for (let i = 0; i < nums.length - 2; i++) {
      let basic = nums[i];
      let left = i + 1;
      let right = nums.length - 1;
      while(left < right){
          let sum = basic + nums[left] + nums[right]
          let diff = Math.abs(sum - target)
          if(min > diff){
              min = diff
              res = sum
          }
          if(sum < target){
              left++
          }else if(sum > target){
              right --
          }else{
              return sum
          }
      }
  }
  return res
};