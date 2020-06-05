// 利用set来存下每一次的数据结果
var isHappy = function(n) {
  let setFlag = new Set()
  let result = n
  while(result != 1){
      if(setFlag.has(result)) return false
      setFlag.add(result)
      result = String(result).split('').reduce((pre, cur)=>{
          return pre += cur**2
      }, 0)
  }
  return true
};
// Map
var isHappy = function(n) {
  let map = new Map()
  while(n != 1){
      if(map.has(n)) return false
      let str = n.toString().split('')
      map.set(n, str)
      n = str.reduce((pre, cur)=>{
          return pre += cur**2
      }, 0)
  }
  return true
};