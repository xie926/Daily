/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length + 1;//原有的长度
  let sum = len * (len - 1) / 2; //等差数组的总和
  let total = nums.reduce((total, num) => {
    return total + num
  })
  //数组的总和
  return sum - total
};