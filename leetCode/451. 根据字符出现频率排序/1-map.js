/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let map = new Map(), arr = [], str = ''
  for(let i = 0; i < s.length; i++){
      if(!map.has(s[i])){
          map.set(s[i], 1)
      }else{
          map.set(s[i], map.get(s[i])+1)
      }
  }
  for(let [key, value] of map){
      arr.push({
          key,
          value
      })
  }
  arr.sort((a,b) => b.value - a.value)
  arr.forEach((item, index) =>{
      str += item.key.repeat(item.value)
  })
  return str
};