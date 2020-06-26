var addDigits = function(num) {
  if(num < 10 && num >= 0) return num
  let result = 0, flag = num.toString()
  for(let i = 0; i < flag.length; i++){
      result += num % 10
      num = Math.floor(num / 10)
  }
  return addDigits(result)
};