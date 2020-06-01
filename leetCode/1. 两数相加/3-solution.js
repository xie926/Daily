//  从数组的最后一项开始，循环开始的时候将最后一项弹出，利用 target-最后一项的值 得到要在剩余数组中的查找的值，进而找到下标值
// 之所以要将最后一项弹出是为了不改变前边数组的结构，以至于找出的下标值正确，并且target与最后一项是两倍数关系，且只有一个，不弹出最后一项，这一项又会被查找出来
var twoSum = function(nums, target) {
  // let i = nums.length;
  // while(i > 1) {
  //     let last = nums.pop();
  //     if (nums.indexOf(target - last) > -1) {
  //         return [nums.indexOf(target - last), nums.length]
  //     }
  //     i--
  // }
  for(let i = nums.length - 1; i > 0; i--){
      let last = nums.pop();
      if (nums.indexOf(target - last) > -1) {
          return [nums.indexOf(target - last), nums.length]
      }
  }
};