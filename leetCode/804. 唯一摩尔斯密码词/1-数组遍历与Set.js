/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let morseMap = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let arr = words.map((item) => {
      return Array.from(item).reduce((prev, cur) => {
          return prev += morseMap[cur.charCodeAt() - 97] 
      }, '')
  })

  return new Set(arr).size
  // return arr.length
};