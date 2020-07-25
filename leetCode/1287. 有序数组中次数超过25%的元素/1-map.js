/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let map = new Map(), count = Math.floor(arr.length / 4);

  arr.forEach((item) => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })

  for(let [key, value] of map){
      if(value > count){
          return key
      }
  }
};