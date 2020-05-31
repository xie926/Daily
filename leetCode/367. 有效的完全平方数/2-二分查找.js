var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let left = 2,
      right = num;
  while (left <= right) {
      let mid = parseInt((left + right) / 2),
          flag = mid * mid;
      if (flag === num) {
          return true;
      } else if (flag < num) {
          left = mid + 1;
      }else if(flag > num){
          right = mid -1;
      }
  }
  return false
};