var findDisappearedNumbers = function(nums) {
  let map = new Map(),
      arr = []
  nums.forEach((item)=>{
      map.set(item, true)
  })
  for(let i = 1; i <= nums.length; i++){
      if(!map.has(i)) arr.push(i)
  }
  return arr
};