var findMaxConsecutiveOnes = function(nums) {
  let min = 0, max = 0, res = 0
  for(let i = 0; i <= nums.length; i++){
      if(nums[i]){
          max++
      }else{
          res = Math.max(res, max-min)
          min = max + 1
          max++
      }
  }
  return res
};

// 注意思考一下，为甚么是   <=   而不是平常的  <
// 当nums = [1]