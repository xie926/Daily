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
## 数组扁平化
## 数组常用方法