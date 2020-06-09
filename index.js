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
    console.log(arr)
  }
  return arr;
}
xier([11,45,2,32,89,0]);