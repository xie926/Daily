var missingNumber = function (nums) {
  let map = new Map()
  for (let i = 0; i <= nums.length; i++) {
    map.set(i, 0)
  }
  nums.forEach((item) => {
    if (map.has(item)) {
      map.set(item, 1)
    }
  })
  for (let [item, count] of map) {
    if (count === 0) return item
  }
};