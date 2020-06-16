var intersection = function(nums1, nums2) {
  let arr1 = nums1.filter((item) => nums2.includes(item))
  return [...new Set(arr1)]
};

var intersection = function(nums1, nums2) {
  return [...new Set([...new Set(nums1)].filter(x => new Set(nums2).has(x)))];
};
