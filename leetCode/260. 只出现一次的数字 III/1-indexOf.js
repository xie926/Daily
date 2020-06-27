var singleNumber = function(nums) {
  return nums.filter((item, index, arr) => {
      return arr.indexOf(item) === arr.lastIndexOf(item)
  })
};