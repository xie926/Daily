function findSubStr(str1, str2){
  if (str1.length > str2.length) {
    var temp = str1;
    str1 = str2;
    str2 = temp;
  }
  for (var j = len1; j > 0; j--) {
    for (var i = 0; i < len1 - j; i++) {
      var current = str1.substr(i, j);
      if (str2.indexOf(current) >= 0) {
        return current;
      }
    }
  }
  return "";
}
console.log(findSubStr("good", "gode"));

function test2(num, target){
  for(let i = 0; i < num.length; i++){
    if(num.indexOf((target - num[i])) !== -1){
      return [i, num.indexOf((target - num[i]))]
    }
  }
  return []
}
console.log(test2([1,7,9,12], 10))

function flat (arr) {
  let result = arr.reduce((prev, cur, index, array) => {
    if(Array.isArray(cur)){
      return prev.concat(flat(cur))
    }
    return prev.concat(cur)
  }, [])
  return [...new Set(result)].sort((a, b) => a-b)
}

console.log(flat([[1,2,3],[2,3,4],[5,7,8,9],[1,24,5,[3,5,6]]]))
