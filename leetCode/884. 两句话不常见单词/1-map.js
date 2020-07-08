/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let arr = (A + ' ' + B).split(' ')
  let map = new Map(), result=[]
  arr.forEach((item) => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })
  for(let [key, value] of map){
      if(value === 1){
          result.push(key)
      }
  }
  return result
};