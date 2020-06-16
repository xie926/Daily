/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if(nums1.length > nums2.length) [nums1,nums2] = [nums2,nums1];
  let hash = new Set(nums1);
  let res = new Set();
  for(let i = 0;i < nums2.length;i++){
      if(hash.has(nums2[i])){
          res.add(nums2[i]);
      }
  }
  return [...res];
};