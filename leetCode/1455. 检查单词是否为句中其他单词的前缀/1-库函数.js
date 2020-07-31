/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  sentence = sentence.trim().split(' ')
  let i = sentence.findIndex((item, index, arr) => item.substr(0, searchWord.length) === searchWord)

  return i < 0 ? -1 : i+1
};