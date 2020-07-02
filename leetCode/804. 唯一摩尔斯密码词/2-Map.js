/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const codeList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z']
  let map = new Map()
  letterList.forEach((item, index) => {
      map.set(item, codeList[index])
  })
  return new Set(words.map((item) => {
      return Array.from(item).reduce((prev, cur) => {
          return prev += map.get(cur)
      }, '')
  })).size
};