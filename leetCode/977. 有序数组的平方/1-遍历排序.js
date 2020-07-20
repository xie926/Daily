/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  A.forEach((item, index, arr) => {
      arr[index] = item * item
  })

  return A.sort((a,b) => a - b)
};