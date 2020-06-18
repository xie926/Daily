var isPowerOfFour = function (num) {
  if (num == 1) {
      return true
  } else if (num < 1) {
      return false
  } else {
      return isPowerOfFour(num / 4)
  }
};