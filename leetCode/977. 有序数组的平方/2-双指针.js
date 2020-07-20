/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let result = [], i = 0, j = A.length - 1

  while(i<=j){
      let left = Math.pow(A[i], 2);
      let right = Math.pow(A[j], 2);
      if(left > right){
          result.unshift(left)
          i++
      }else{
          result.unshift(right)
          j--
      }
  }

  return result
};