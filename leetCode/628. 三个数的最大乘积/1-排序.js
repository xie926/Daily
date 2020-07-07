/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++){
      if(!map.has(nums[i])){
          map.set(nums[i], 1)
      }else(
          map.set(nums[i], map.get(nums[i]) + 1)
      )
  }
  let countMax = Math.max.apply(null, [...map.values()]), arr=[]
  // console.log(countMax)
  for(let n of map.keys()){
      if(map.get(n) === countMax){
          arr.push(n)
      }
  }
  // console.log(arr)
  let result = nums.length;
  for(let i = 0; i < arr.length; i++){
    let flag = nums.lastIndexOf(arr[i]) - nums.indexOf(arr[i]) + 1
    result = Math.min(result, flag)
  }
  return result
};

console.log(findShortestSubArray([1,2,2,3,1]))