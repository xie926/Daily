var toLowerCase = function(str) {
  let result = '';
  for(let i = 0;i < str.length;i++){
      result += String.fromCharCode(str.charCodeAt(i) | 32);
  }
  return result;
};