/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  let up = 0, down = 0, left = 0, right = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        up++;
        down--;
        break;
      case 'D':
        down++;
        up--;
        break;
      case 'L':
        left++;
        right--;
        break;
      case 'R':
        right++;
        left--;
        break;
      default:
        break;
    }
  }
  return up === down && down === left && left === right && right === 0;
};