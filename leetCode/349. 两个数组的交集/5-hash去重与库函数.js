/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let tmp = {};
  return nums1.filter((item) => {
      if(!tmp[item] && nums2.includes(item)){
          tmp[item] = true;
          return nums2.includes(item)
      }
  })
};