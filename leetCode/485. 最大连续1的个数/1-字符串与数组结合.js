var findMaxConsecutiveOnes = function(nums) {
  var arr = nums.join('').split('0').map(item => item.length)
  return Math.max(...arr)
};