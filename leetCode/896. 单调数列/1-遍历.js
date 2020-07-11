/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let max = Math.max.apply(null, A), min = Math.min.apply(null, A)
  if(A[A.length-1] !== max && A[A.length-1] !== min) return false
  if(A[A.length-1] === max){
      for(let i = 0; i < A.length-1; i++){
          if(A[i] > A[i+1]){
              return false
          }
      }
  }
  if(A[A.length-1] === min){
      for(let i = 0; i < A.length-1; i++){
          if(A[i] < A[i+1]){
              return false
          }
      }
  }
  return true
};