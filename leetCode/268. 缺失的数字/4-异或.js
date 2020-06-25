var missingNumber = function(nums) {
  let missing = nums.length;
  nums.forEach((item, index) => {
      missing ^= item ^ index
  })
  return missing
};