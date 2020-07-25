- new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：
```
1. 创建一个空的简单JavaScript对象（即{}）；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。
```
- 看下面事例：
```
function Person() {
this.name = 'xy'
}

根据上面描述的，new Person()做了：
1. 创建一个空对象：var obj = {}
2. 将空对象分配给 this 值：this = obj
3. 将空对象的__proto__指向构造函数的prototype:this.__proto__ = Person().prototype
4. 返回this:return this
```

## 实现代码一
```javascript
function newOper(){
  let obj = {}
  let constructor = Array.prototype.shift.apply(arguments)
  obj.__proto__ = constructor.prototype
  var ret = constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}
```

## 实现代码二
```javascript
function newOper(cons, ...args){
  if(typeof cons !== 'function'){
    throw 'the first param must be a function'
  }
  let obj = Object.create(cons.prototype)
  let  res = cons.apply(obj, args)

  let isObject = typeof res === 'Object' && res !== null
  let isFunction = typeof res === 'function'

  return isObject || isFunction ? res : obj
}
```