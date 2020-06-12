## 判断是否是数组
- Array.isArray()
- XXX instanceof Array
- XXX.constructor === Array
- Object.prototype.toString().apply()
## 转化为数组
- Array.from()
- Array.prototype.slice.call()
- [].slice.call() 与第二个本质上是一样的
- for循环+push()
## 数组排序
- Array.prototype.sort((a,b) => a-b) 升序排列
- Array.prototype.sort((a,b) => b-a) 降序排列
- 冒泡排序
```javascript
var arr=[11,45,2,32,89,0];
for(var i=1;i<arr.length;i++){     //第一轮循环表示循环的轮数
  for(var j=0;j<arr.length-i;j++){  //这轮的for循环指的是每次循环的次数
    if(arr[j]>arr[j+1]){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }
  }
}
```
- 选择排序
```javascript
var arr=[11,45,2,32,89,0];
for(var i=0;i<arr.length-1;i++){
  var minIndex=i;
  for(var j=i+1;j<arr.length;j++){
    if(arr[minIndex]>arr[j]){
      minIndex=j;
    }
  }
  var temp=arr[i];
  arr[i]=arr[minIndex];
  arr[minIndex]=temp;
}
```
- 快速排序
```javascript
var arr = [3, 1, 4, 2, 5, 21, 6, 15, 63];
function sortA(arr) {
  // 如果只有一位，就没有必要比较
  if (arr.length <= 1) {
    return arr;
  }
  // 获取中间值的索引
  var len = Math.floor(arr.length / 2);
  // 截取中间值
  var cur = arr.splice(len, 1);
  // 小于中间值放这里面
  var left = [];
  // 大于的放着里面
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    // 判断是否大于
    if (cur > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 通过递归，上一轮比较好的数组合并，并且再次进行比较。
  return sortA(left).concat(cur, sortA(right));
}
```
- 插入排序
```javascript
function insertSort(arr){
  let temp;
  for(let i = 1; i<arr.length; i++){
    for(let j = i; j > 0; j--){
      if(arr[j] < arr[j-1]){
        temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      }
    }
  }
  return arr
}
```
- 希尔排序
```javascript
function xier(arr) {
  var interval = parseInt(arr.length / 2);  //分组间隔设置
  while (interval > 0) {
    for (var i = 0; i < arr.length; i++) {
      var n = i;
      while (arr[n] < arr[n - interval] && n > 0) {
        var temp = arr[n];
        arr[n] = arr[n - interval];
        arr[n - interval] = temp;
        n = n - interval;
      }
    }
    interval = parseInt(interval / 2);
  }
  return arr;
}
xier([12, 9, 38, 44, 7, 98, 35, 59, 49, 88, 38]);
```
## 数组去重
- Set与...
```javascript
function unique(arr){
  return [...new Set(arr)]
}
```
- Set 与 Array.from
```javascript
function unique (arr) {
  return Array.from(new Set(arr))
}
```
- 双重for循环+splice
```javascript
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
```
- filter
```javascript
function unique(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  });
}
```
- indexOf()/includes()
- Map数据结构
- sort方法，前一项与后一项不相等则加入新的数组
## 数组扁平化
- 递归 + reduce
```javascript
function flat(arr){
  arr.reduce((pre, cur, index, array)=>{
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  },[])
}
```
- 递归 + map  原理其实和 递归+reduce一样
```javascript
function flatten(arr) {
  var res = [];
  arr.map(item => {
    if(Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
}
```
- ES6的扩展运算符
```javascript
[].concat(...arr);
```
```javascript
function flatten(arr) {
  while(arr.some(item=>Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```
## 数组常用方法