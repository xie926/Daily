var findDuplicate = function(nums) {
  for(let num of nums){
      if(nums.indexOf(num) !== nums.lastIndexOf(num)) return num
  }
};

var findDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++){
      if(nums.indexOf(nums[i], i+1) !== -1) return nums[i]
  }
};