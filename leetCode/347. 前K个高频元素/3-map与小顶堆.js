// 遍历一遍数组统计每个元素的频率，并将元素值（ key ）与出现的频率（ value ）保存到 map 中

// 通过 map 数据构建一个前 k 个高频元素小顶堆，小顶堆上的任意节点值都必须小于等于其左右子节点值，即堆顶是最小值。

// 具体步骤如下：

// 遍历数据，统计每个元素的频率，并将元素值（ key ）与出现的频率（ value ）保存到 map 中
// 遍历 map ，将前 k 个数，构造一个小顶堆
// 从 k 位开始，继续遍历 map ，每一个数据出现频率都和小顶堆的堆顶元素出现频率进行比较，如果小于堆顶元素，则不做任何处理，继续遍历下一元素；如果大于堆顶元素，则将这个元素替换掉堆顶元素，然后再堆化成一个小顶堆。
// 遍历完成后，堆中的数据就是前 k 大的数据


let topKFrequent = function(nums, k) {
  let map = new Map(), heap = [,]
  nums.map((num) => {
      if(map.has(num)) map.set(num, map.get(num)+1)
      else map.set(num, 1)
  })
  
  // 如果元素数量小于等于 k
  if(map.size <= k) {
      return [...map.keys()]
  }
  
  // 如果元素数量大于 k，遍历map，构建小顶堆
  let i = 0
  map.forEach((value, key) => {
      if(i < k) {
          // 取前k个建堆, 插入堆
          heap.push(key)
          // 原地建立前 k 堆
          if(i === k-1) buildHeap(heap, map, k)
      } else if(map.get(heap[1]) < value) {
          // 替换并堆化
          heap[1] = key
          // 自上而下式堆化第一个元素
          heapify(heap, map, k, 1)
      }
      i++
  })
  // 删除heap中第一个元素
  heap.shift()
  return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, map, k) => {
  if(k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for(let i = Math.floor(k/2); i>=1 ; i--) {
      heapify(heap, map, k, i)
  }
}

// 堆化
let heapify = (heap, map, k, i) => {
  // 自上而下式堆化
  while(true) {
      let minIndex = i
      if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
          minIndex = 2*i
      }
      if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
          minIndex = 2*i+1
      }
      if(minIndex !== i) {
          swap(heap, i, minIndex)
          i = minIndex
      } else {
          break
      }
  }
}

// 交换
let swap = (arr, i , j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}