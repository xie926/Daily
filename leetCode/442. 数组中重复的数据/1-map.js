/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let map = new Map(), arr = []
  nums.forEach((item, index) => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })
  for(let [key, value] of map){
      if(value === 2) arr.push(key)
  }
  return arr
};