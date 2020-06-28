- instanceof能否判断基本数据类型？
能。但是需要利用到Symbol.hasInstance来重写instanceof方法
```javascript
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === 'number'
  }
}
console.log(111 instanceof PrimitiveNumber) // true
```
- 自己手写一个instanceof方法
```javascript
function myInstanceof(example, type){
  if(typeof example !== 'object' || example === null){
    return false
  }
  let proto = Object.getPrototypeOf(example)
  while(true){
    if(proto === null) return false
    if(proto === type.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String));//true
```