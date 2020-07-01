var numJewelsInStones = function(J, S) {
  let jArr = J.split('')
  let sArr = S.split('')

  return sArr.filter(item => jArr.includes(item)).length
};