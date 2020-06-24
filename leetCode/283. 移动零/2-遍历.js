var moveZeroes = function (nums) {
  let i = 0;
  while (i < nums.length) {
      if (nums.indexOf(0) !== -1) {
          nums.splice(nums.indexOf(0), 1)
          nums.push(0)
      }
      i++
  }
  return nums
};