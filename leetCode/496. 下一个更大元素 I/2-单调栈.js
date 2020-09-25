/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map()
  let res = []
  let stack = []
  for(let i = 0; i < nums2.length; i++){
      while(stack.length && nums2[i] > stack[stack.length - 1]){
          map.set(stack.pop(), nums2[i])
      }
      stack.push(nums2[i])
  }
  while(stack.length){
      map.set(stack.pop(), -1)
  }

  nums1.forEach((item) => {
      res.push(map.get(item))
  })

  return res
};