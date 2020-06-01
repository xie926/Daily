// 只循环一次，然后求得target和当前数值的差值，
// 并且把数组存放在map里面，去map里面循环看是否有这个目标值，有的话，拿到对应值的下标
// 这样时间复杂度就变为O(n)

var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++){
      let flag = target - nums[i]
      if(map.has(flag)){
          return [map.get(flag), i]
      }
      map.set(nums[i], i)
  }
};