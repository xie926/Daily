var findContentChildren = function(g, s) {
  g.sort((a,b) => a-b)
  s.sort((a,b) => a-b)
  let count = 0, gIndex = 0; sIndex=0;
  let gLen = g.length, sLen = s.length
  while(gIndex < gLen && sIndex < sLen){
      if(g[gIndex] <= s[sIndex]){
          count++;
          gIndex++;
      }
      sIndex++
  }
  return count
};


var findContentChildren = function(g, s) {
  g.sort((a,b) => b-a)
  s.sort((a,b) => b-a)
  let count = 0
  for(let i = 0; i < g.length; i++){
      for(let j = 0; j < s.length; j++){
          if(g[i] <= s[j]){
              s.splice(j, 1)
              count++;
              break
          }else{
              break;
          }
      }
  }
  return count
};