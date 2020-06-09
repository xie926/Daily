var thirdMax = function(nums) {
  var setItem = new Set(nums)
  var arr = [...setItem].sort((a,b) => b-a)
  return arr.length < 3 ? arr[0] : arr[2]
};