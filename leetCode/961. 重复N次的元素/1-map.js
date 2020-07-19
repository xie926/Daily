/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let map = new Map();
  A.forEach((item) => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })
  for(let [key, value] of map){
      if(value === A.length / 2){
          return key
      }
  }
};