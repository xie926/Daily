// 简单粗暴，直接进行嵌套循环比较两数的和是否为目标值
// 如果是，返回对应的下标
// 但是时间复杂度为O(n^2)比较久
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
      let total = 0;
      for(let j = i + 1; j < nums.length; j++){
          total = nums[i] + nums[j];
          if(total === target){
              let num = [i, j];
              return num;
          }
      }
  }
};