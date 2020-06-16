/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res = new Set();
  nums2 = nums2.sort((a,b) => a - b);
  let binarySearch = (arr,val) => {
      let left = 0;
      let right = arr.length - 1;
      while(left <= right){
          let mid = (left + right) >> 1;
          if(arr[mid] === val){
              return true;
          }else if(arr[mid] > val){
              right = mid - 1;
          }else{
              left = mid + 1;
          }
      }
      return false;
  }
  for(let i = 0;i < nums1.length;i++){
      if(binarySearch(nums2,nums1[i])){
          res.add(nums1[i]);
      }
  }
  return [...res];
};
