/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0, right = -1;
  let result = 0
  let map = {}
  while(left < s.length){
      let nextLetter = s[right +1];
      if(!map[nextLetter] && nextLetter !== undefined){
          map[nextLetter] = 1
          right++
      }else{
          map[s[left]] = 0
          left++
      }
      result = Math.max(result, right-left+1)
  }
  return result
};