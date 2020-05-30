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