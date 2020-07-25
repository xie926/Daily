/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase().replace(/[\!|\?|\'|\,|\;|\.]/g, ' ');
  let arr = paragraph.split(/\ +/g), map = new Map()
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  banned.forEach((item) => {
    if (map.has(item)) {
      map.delete(item)
    }
  })
  let max = Math.max.apply(null, [...map.values()]), result = [];
  console.log(max)
  for (let [key, value] of map) {
    if (value == max) {
      return key
    }
  }
};