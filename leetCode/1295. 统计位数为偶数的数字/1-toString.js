/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.reduce((pre, cur) => {
      if(cur.toString().length % 2 == 0){
          pre++
      }
      return pre
  }, 0)
};