var findDuplicate = function(nums) {
  let map = new Map();
  for(let num of nums){
      if(!map.has(num)){
          map.set(num, 1)
      }else{
          map.set(num, map.get(num) + 1)
      }
  }
  for(let [num, count] of map){
      if(count > 1) return num
  }
};