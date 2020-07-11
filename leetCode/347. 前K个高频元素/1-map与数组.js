var topKFrequent = function(nums, k) {
  let map = new Map(), arr = [...new Set(nums)]
  nums.forEach(item => {
      if(!map.has(item)){
          map.set(item, 1)
      }else{
          map.set(item, map.get(item) + 1)
      }
  })
  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};