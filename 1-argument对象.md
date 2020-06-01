## 描述
- arguments对象是所有（==非箭头==）函数中都可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。
- 此对象包含传递给函数的每个参数，第一个参数在索引0处。例如，如果一个函数传递了三个参数，你可以以如下方式引用他们：
```
arguments[0]
arguments[1]
arguments[2]
```
- 参数也可以被设置：
```
arguments[1] = 'new value';
```
- 关于将arguments对象转化为Array
      
    - arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。但是它可以被转换为一个真正的Array：
    ```
    // ES5
    var args = Array.prototype.slice.call(arguments);
    var args = [].slice.call(arguments);
    
    // ES6
    const args = Array.from(arguments);
    const args = [...arguments];
    ```
    - 对参数使用slice会阻止某些JavaScript引擎中的优化 (比如 V8 - 更多信息)。如果你关心性能，尝试通过遍历arguments对象来构造一个新的数组。另一种方法是使用被忽视的Array构造函数作为一个函数：
    ```
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    ```
- arguments.length可以用来确定实际函数传入的参数个数；Function.length可以用来确定函数签名中的参数数量，即在函数声明时接受的参数个数

## 特性
1. arguments对象和Function是分不开的。

2. 因为arguments这个对象不能显式创建。

3. arguments对象只有函数开始时才可用。


## 对参数使用typeof
```
console.log(typeof arguments);    // 'object'
// arguments 对象只能在函数内使用
function test(a){
    console.log(a,Object.prototype.toString.call(arguments));
    console.log(arguments[0],arguments[1]);
    console.log(typeof arguments[0]);
}
test(1);
/*
1 "[object Arguments]"
1 undefined
number
*/
```

## arguments对象的属性
arguments.callee
指向当前执行的函数。
arguments.caller 
指向调用当前函数的函数。
arguments.length
指向传递给当前函数的参数数量。
arguments[@@iterator]
返回一个新的Array迭代器对象，该对象包含参数中每个索引的值。
注意:现在在严格模式下，arguments对象已与过往不同。arguments[@@iterator]不再与函数的实际形参之间共享，同时caller属性也被移除。

## 一些例子

1. 例子一 ------ arguments对象可以与剩余参数、默认参数和解构赋值参数结合使用。
    - 严格模式下  
    在严格模式下，剩余参数、默认参数和解构赋值参数的存在不会改变 arguments对象的行为
        ```
        function foo(...args) {
          return args;
        }
        foo(1, 2, 3);  // [1,2,3]
        ```
    - 非严格模式下
        1. 没有包含剩余参数、默认参数和解构赋值，那么arguments对象中的值会跟踪参数的值（反之亦然）。看下面的代码：
        ```
        function func(a) { 
          arguments[0] = 99;   // 更新了arguments[0] 同样更新了a
          console.log(a);
        }
        func(10); // 99
        ```
        ```
        function func(a) { 
          a = 99;              // 更新了a 同样更新了arguments[0] 
          console.log(arguments[0]);
        }
        func(10); // 99
        ```
        2. 包含剩余参数、默认参数和解构赋值
        ```
        function func(a = 55) { 
          arguments[0] = 99; // updating arguments[0] does not also update a
          console.log(a);
        }
        func(10); // 10
        ```
        ```
        function func(a = 55) { 
          a = 99; // updating a does not also update arguments[0]
          console.log(arguments[0]);
        }
        func(10); // 10
        ```
        ```
        function func(a = 55) { 
          console.log(arguments[0]);
        }
        func(); // undefined
        ```
2. 例子二
    ```
    var length = 10;
    function fn() {
      console.log(this.length);
    }
    
    var obj = { 
      method: function(fn) {
        fn();
        arguments[0]();
      }
    };
    
    obj.method(fn, 1); 输出：10,2
    ```
    这里有2个需要注意的点。fn函数里面的this的指向：
    1. 第一个值为10，执行的是method里面的第一行"fn()",这里this指向的window。所以输出的值为最外层定义的length。
    2. 第二个值为2，执行的是method里面的第二行"arguments[0]()"（arguments[0]() => fn() ），这里this执行的是arguments这个对象,所以输出值为arguments的长度