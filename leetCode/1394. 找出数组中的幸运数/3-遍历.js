/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let lucky = [], currentValue
  arr = arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
      currentValue = arr[i]
      let index = 0
      for (let j = 0; j < arr.length; j++) {
          if (arr[j] === currentValue) {
              index++
          }
      }
      if (currentValue === index) {
          lucky.push(currentValue)
          index = 0
      }
  }
  return lucky.length ? lucky[lucky.length - 1] : -1
};