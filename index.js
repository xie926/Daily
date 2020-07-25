/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let arr = [], cur = K

  for(let i = A.length-1; i >= 0; i--){
      cur += A[i]
      arr.unshift(cur % 10)
      cur = Math.floor(cur / 10)
      console.log(cur)
  }

  return arr
};

console.log(addToArrayForm([2,7,4], 181))