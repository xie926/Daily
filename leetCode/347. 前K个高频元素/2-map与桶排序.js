let topKFrequent = function(nums, k) {
  let map = new Map(), arr = [...new Set(nums)]
  nums.map((num) => {
      if(map.has(num)) map.set(num, map.get(num)+1)
      else map.set(num, 1)
  })
  
  // 如果元素数量小于等于 k
  if(map.size <= k) {
      return [...map.keys()]
  }
  
  return bucketSort(map, k)
};

// 桶排序
let bucketSort = (map, k) => {
  let arr = [], res = []
  map.forEach((value, key) => {
      // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
      if(!arr[value]) {
          arr[value] = [key]
      } else {
          arr[value].push(key)
      }
  })
  // 倒序遍历获取出现频率最大的前k个数
  for(let i = arr.length - 1;i >= 0 && res.length < k;i--){
      if(arr[i]) {
          res.push(...arr[i])
      }
}
return res
}