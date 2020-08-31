/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let result = []
  nums1.forEach((item1) => {
      let index = nums2.indexOf(item1);
      let findIndex = nums2.findIndex((item2,idx) => item2 > item1 && index < idx);
      findIndex > -1 ? result.push(nums2[findIndex]) : result.push(findIndex)
  })
  return result
};