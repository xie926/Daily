var findComplement = function(num) {
  const arr = parseInt(num).toString(2).split('');
  const resultArr = arr.map(v=> v== '1' ? '0' : '1');
  const result = resultArr.join('');
  return parseInt(result, 2)
};