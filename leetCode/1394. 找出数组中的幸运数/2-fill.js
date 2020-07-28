/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let tmp = new Array(500+1);
  let ans = -1;

  tmp.fill(0);
  for (let val of arr) {
      tmp[val]++;
  }

  for (let val of arr) {
      if (tmp[val] === val && val > ans) {
          ans = val;
      }
  }

  return ans;
};