/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  return (BigInt(A.join('')) + BigInt(K)).toString().split('')
};