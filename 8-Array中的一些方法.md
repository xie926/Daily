- arr.push()
```
let arr = [1,2,3,4,5]
console.log(arr.push(5))   // 6
console.log(arr) // [1,2,3,4,5,5]
```
- arr.pop()
```
let arr = [1,2,3,4,5]
console.log(arr.pop())     // 5
console.log(arr)  //[1,2,3,4]
```
- arr.unshift()
```
let arr = [1,2,3,4,5]
console.log(arr.shift())  // 1
console.log(arr)   // [2,3,4,5]
```
- arr.shift()
```
let arr = [1,2,3,4,5]
console.log(arr.unshift(2))    // 6
console.log(arr)  // [2,1,2,3,4,5]
```
- arr.splice(index, n)
```
let arr = [1,2,3,4,5]

<!--删除-->
let arr1 = arr.splice(2,2)
console.log(arr1)     //[3,4]
console.log(arr)    // [1,2,5]
<!--添加-->
let arr2 = arr.splice(2,0,3,4)
console.log(arr2)     //[]
console.log(arr)    // [1,2,3,4,5]
<!--替换-->
let arr3 = arr.splice(1,1,3)
console.log(arr3)     //[2]
console.log(arr)    // [1,3,3,4,5]
```
- arr.reverse()
```
let arr = [1,2,3,4,5,10]
let arr1 = arr.reverse()
console.log(arr1)    // [10,5,4,3,2,1]
console.log(arr)    // [10,5,4,3,2,1]
```
- arr.sort([func])
```
let arr = [2,10,6,1,4,22,3]
console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]
let arr1 = arr.sort((a, b) =>a - b)  
console.log(arr1)   // [1, 2, 3, 4, 6, 10, 22]
let arr2 = arr.sort((a, b) =>b-a)  
console.log(arr2)  // [22, 10, 6, 4, 3, 2, 1]
console.log(arr)   // [22, 10, 6, 4, 3, 2, 1]
```
- arr.concat(array)
```
var arr = [3,4,9,2,6,88,10,1]

var arr1 = arr.concat([1,2,3])
var arr2 = arr.concat()
console.log(arr);  // [ 3, 4, 9, 2, 6, 88, 10, 1 ]
console.log(arr1); // [ 3, 4, 9, 2, 6, 88, 10, 1, 1, 2, 3 ]
console.log(arr2); // [ 3, 4, 9, 2, 6, 88, 10, 1 ]
```

- arr.slice(startIndex, endIndex)
```
let arr = [1,2,3,4,5]
let arr1 = arr.slice(1,3)
let arr2 = arr.slice(2)
console.log(arr1)   // [2,3]
console.log(arr2)   // [3,4,5]
console.log(arr)    //  [1,2,3,4,5]
```

- arr.indexOf()
```
let arr = [1,2,3,4,5,2]
let arr1 = arr.indexOf(2)
console.log(arr1)  // 1
let arr2 = arr.indexOf(9)
console.log(arr2)  // -1
```
- arr.lastIndexOf()
```
let arr = [1,2,3,4,5,2]
let arr1 = arr.lastIndexOf(2)
console.log(arr1)  // 5
let arr2 = arr.lastIndexOf(9)
console.log(arr2)  // -1
```
- arr.find(callback) 找到第一个符合条件的数组成员
```
let arr = [1,2,3,4,5,2,4]
let arr1 = arr.find((value, index, array) =>value > 2)
console.log(arr1)   // 3
```
- arr.findIndex(callback) 找到第一个符合条件的数组成员的索引值
```
let arr = [1,2,3,4,5]
let arr1 = arr.findIndex((value, index, array) => value > 3)
console.log(arr1)  // 3
```

- arr.includes() 判断数中是否包含给定的值
```
let arr = [1,2,3,4,5]
let arr1 = arr.includes(2)  
console.log(arr1)   // ture
let arr2 = arr.includes(9) 
console.log(arr2)    // false
let arr3 = [1,2,3,NaN].includes(NaN)
console.log(arr3)  // true
```
ps:与indexOf()的区别：
```
1 indexOf()返回的是数值，而includes()返回的是布尔值
2 indexOf() 不能判断NaN，返回为-1 ，includes()则可以判断
```
- arr.keys() 遍历数组的键名
```
let arr = [1,2,3,4]
let arr2 = arr.keys()
for (let key of arr2) {
    console.log(key);   // 0,1,2,3
}
```
- arr.values() 遍历数组键值
```
let arr = [1,2,3,4]
let arr1 = arr.values()
for (let val of arr1) {
     console.log(val);   // 1,2,3,4
}
```
- arr.entries() 遍历数组的键名和键值，返回迭代数组
```
let arr = [1,2,3,4]
let arr1 = arr.entries()
for (let e of arr1) {
    console.log(e);   // [0,1] [1,2] [2,3] [3,4]
}
```
- Array.from(伪数组)
```
let str = '12345'
console.log(Array.from(str))    // ["1", "2", "3", "4", "5"]
let obj = {0:'a',1:'b',length:2}
console.log(Array.from(obj))   // ["a", "b"]
```
- Array.of()
```
let str = '11'
console.log(Array.of(str))   // ['11']
```
等价于
```
console.log(new Array('11'))  // ['11]
```
==但是new Array()有缺点，就是参数问题引起的重载==
```
console.log(new Array(2))   //[empty × 2]  是个空数组
console.log(Array.of(2))    // [2]
```
- arr.copyWithin() 在当前数组内部，将制定位置的数组复制到其他位置，会覆盖原数组项，返回当前数组<br/>
　　参数: target --必选 索引从该位置开始替换数组项<br/>
　　　　  start --可选 索引从该位置开始读取数组项，默认为0.如果为负值，则从右往左读。<br/>
　　　　  end --可选 索引到该位置停止读取的数组项，默认是Array.length,如果是负值，表示倒数<br/>
```
let arr = [1,2,3,4,5,6,7]
let arr1 = arr.copyWithin(1)
console.log(arr1)   // [1, 1, 2, 3, 4, 5, 6]
let arr2 = arr.copyWithin(1,2)
console.log(arr2)   // [1, 3, 4, 5, 6, 7, 7]
let arr3 = arr.copyWithin(1,2,4)
console.log(arr3)   // [1, 3, 4, 4, 5, 6, 7]
```
- arr.fill(target, start, end) 使用给定的值，填充一个数组，填充完后会改变原数组<br/>
　　参数： target -- 待填充的元素<br/>
　　　　　 start -- 开始填充的位置-索引<br/>
　　　　   end -- 终止填充的位置-索引（不包括该位置)
```
let arr = [1,2,3,4,5]
let arr1 = arr.fill(5)
console.log(arr1)  // [5, 5, 5, 5, 5]
console.log(arr)   // [5, 5, 5, 5, 5]
let arr2 = arr.fill(5,2)
console.log(arr2)
let arr3 = arr.fill(5,1,3)
console.log(arr3)
```

## 高级方法

- arr.forEach(callback) 遍历数组,无return  即使有return，也不会返回任何值，并且会影响原来的数组
　　callback的参数： value --当前索引的值<br/>
　　　　　　　　　　index --索引<br/>
　　　　　　　　　　array --原数组
```
let arr = [1,2,3,4,5]
arr.forEach( (value,index,array)=>{
    console.log(`value:${value}    index:${index}     array:${array}`)
})   
//  value:1    index:0     array:1,2,3,4,5
//  value:2    index:1     array:1,2,3,4,5
//  value:3    index:2     array:1,2,3,4,5
//  value:4    index:3     array:1,2,3,4,5
//  value:5    index:4     array:1,2,3,4,5

let arr = [1,2,3,4,5]
arr.forEach( (value,index,array)=>{
    value = value * 2
    console.log(`value:${value}    index:${index}     array:${array}`)
})   
console.log(arr)
// value:2    index:0     array:1,2,3,4,5
// value:4    index:1     array:1,2,3,4,5
// value:6    index:2     array:1,2,3,4,5
// value:8    index:3     array:1,2,3,4,5
// value:10   index:4     array:1,2,3,4,5
// [1, 2, 3, 4, 5]

var arr = [1,2,3,4]; 
var res = arr.forEach((item,index,arr)=>{     
 arr[index] = item * 2; 
 return arr 
})
console.log(arr); // [2,4,6,8]
console.log(res); // undefined 
```
- arr.map(callback) 映射数组(遍历数组),有return 返回一个新数组。<br/>
　　callback的参数： value --当前索引的值<br/>
　　　　　　　　　　index --索引<br/>
　　　　　　　　　　array --原数组<br/>
```
let arr = [1,2,3,4,5]
arr.map( (value,index,array)=>{
    value = value * 2
    console.log(`value:${value}    index:${index}     array:${array}`)
})   
console.log(arr)

var arr1 = [1,2,3,4]; 
var res1 = arr1.map((item,index,arr)=>{ 
 item = item * 3; 
 return item; 
})
console.log(arr1); // [1,2,3,4]
console.log(res1); // [3,6,9,12]
```
ps: arr.forEach()和arr.map()的区别 
    1. arr.forEach()是和for循环一样，是代替for。arr.map()是修改数组其中的数据，并返回新的数据。
    2. arr.forEach() 没有return  arr.map() 有return

- arr.filter(callback) 过滤数组，返回一个满足要求的数组 <br/>
   callback的参数： value --当前索引的值<br/>
　　　　　　　　　　      index --索引
```
let arr = [1,2,3,4,5]
let arr1 = arr.filter( (value, index) => value<3)
console.log(arr1)    // [1, 2]
```
- arr.every(callback) 依据判断条件，数组的元素是否全满足，若满足则返回ture<br/>　　callback的参数： value --当前索引的值<br/>
　　　　　　　　　　      index --索引
```
let arr = [1,2,3,4,5]
   let arr1 = arr.every( (value, index) =>value<3)
   console.log(arr1) // false
   let arr2 = arr.every( (value, index) =>value<6)
   console.log(arr2)  // true
 
```
- arr.some() 依据判断条件，数组的元素是否有一个满足，若有一个满足则返回ture<br/>　　callback的参数： value --当前索引的值<br/>
　　　　　　　　　　      index --索引
```
let arr = [1,2,3,4,5]
let arr1 = arr.some( (value, index) =>value<3)
console.log(arr1) // true
let arr2 = arr.some( (value, index) =>value>6)
console.log(arr2) // false
```


- arr.reduce(callback, initialValue) 迭代数组的所有项，累加器，数组中的每个值（从左到右）合并，最终计算为一个值<br/>
　　参数： callback: previousValue 必选 --上一次调用回调返回的值，或者是提供的初始值（initialValue）<br/>
　　　　　　　　　　currentValue 必选 --数组中当前被处理的数组项<br/>
　　　　　　　　　　index 可选 --当前数组项在数组中的索引值<br/>
　　　　　　　　　　array 可选 --原数组<br/>
　　　　　　　　　　initialValue: 可选 --初始值<br/>
　　实行方法：回调函数第一次执行时，preValue 和 curValue 可以是一个值，如果 initialValue 在调用 reduce() 时被提供，那么第一个 preValue 等于 initialValue ，并且curValue 等于数组中的第一个值；如果initialValue 未被提供，那么preValue 等于数组中的第一个值.
```
let arr = [0,1,2,3,4]
let arr1 = arr.reduce((preValue, curValue) => 
    preValue + curValue
)
console.log(arr1)    // 10


let arr2 = arr.reduce((preValue,curValue)=>preValue + curValue,5)
console.log(arr2)    // 15
```

reduce的高级用法<br/>
 （1）计算数组中每个元素出现的次数

```
let names = ['peter', 'tom', 'mary', 'bob', 'tom','peter'];
let nameNum = names.reduce((pre,cur)=>{
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1
  }
  return pre
},{})
console.log(nameNum); //{ peter: 2, tom: 2, mary: 1, bob: 1 }
```
   （2）数组去重

```
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
},[])
console.log(newArr);// [1, 2, 3, 4]
```
（3）将多维数组转化为一维
```
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const newArr = function(arr){
   return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
```
```
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const newArr = function (arr) {
  return arr.reduce((pre,now)=>{
    if(Array.isArray(now)){
      console.log(pre)
      return pre.concat(newArr(now))
    }
    return pre.concat(now)
  },[])
}
console.log(newArr(arr))
```

