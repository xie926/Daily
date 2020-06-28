var wordPattern = function(pattern, str) {
  let map = new Map(), maps = new Map()
  str = str.split(' ')
  if(pattern.length !== str.length) return false
  for(let i = 0; i < pattern.length; i++){
      if(!map.has(pattern[i])){
          map.set(pattern[i], str[i])
      }else{
          if(map.get(pattern[i]) !== str[i]){
              return false
          }
      }
      if(!maps.has(str[i])){
          maps.set(str[i], pattern[i])
      }else{
          if(maps.get(str[i]) !== pattern[i]){
              return false
          }
      }
  }
  return true
};