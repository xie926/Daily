/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  if(target < letters[0] || target >= letters[letters.length - 1]) return letters[0]
  let low = 0, high = letters.length-1, mid;
  while(low <= high){
      mid = Math.floor((low + high) / 2)
      if(letters[mid] <= target){
          low = mid + 1
      }
      if(letters[mid] > target){
          high = mid - 1
      }
  }
  return letters[high + 1]
};