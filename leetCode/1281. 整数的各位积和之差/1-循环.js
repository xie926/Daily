/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let sum = 0, mul = 1;
  while(n >= 1){
      let flag = n % 10;
      sum += flag;
      mul *= flag
      n = Math.floor( n / 10 )
  }

  return (mul - sum)
};