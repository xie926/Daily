var singleNumber = function(nums) {
  let map = new Map(), arr = []
  nums.forEach((item) => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })
  for(let [item, count] of map){
      if(count === 1) arr.push(item)
  }
  return arr
};