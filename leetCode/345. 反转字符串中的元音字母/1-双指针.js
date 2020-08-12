/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let setArr = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arr = s.split('');
  let i = 0, j = arr.length - 1;
  while (i < j) {
      if (setArr.has(arr[i])) {
          if(setArr.has(arr[j])){
              [arr[i], arr[j]] = [arr[j], arr[i]]
              i++
          }
          j--
      }else{
          i++
      }
  }

  return arr.join('')
};