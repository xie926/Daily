/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let map = new Map(), result = [];
  arr.forEach((item) => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })

  for(let [key, value] of map){
      if(key == value){
          result.push(value)
      }
  }

  return result.length === 0 ? -1 : Math.max.apply(null, result)
};