## 语法
- 标识符的含义
```
所谓标识符，就是指变量的变量声明、函数的函数声明、函数的参数、对象的属性名
```
- 标识符的规则
```
1. 第一个字符必须是字母、下划线、美元符
2. 其他字符可以是数字、字母、下划线、美元符
3. 标识符采用驼峰大小写格式
4. 不能把关键字、保留字、true、false、null用作标识符
```
- 关于";"结尾语句的好处
```
1. 加上分号可以避免很多错误，如不完整的输入
2. 开发人员可以放心通过删除多余空格来压缩ECMAScript来压缩代码体积
3. 加上分号也会在某些情况下增进代码性能
```
- ECMAScript的变量是松散型的，什么是松散型？
```
所谓松散型，就是指变量可以用来存放任何数据类型的值，他是根据值的类型来确定变量所属的类型

let message = 'Hi'  // 现在message是String类型
message = 100   // 现在message是number类型

我们不建议中途去改变变量所属的数据类型，即原则上变量声明的时候他是什么类型，之后就依然是什么类型
```
- typeof可以检测的数据类型有哪些
    - "undefined"
    - "boolean"
    - "string"
    - "number"
    - "object"
    - "function"
- 为什么 typeof null 会返回 "object"?
```
因为null会被认为是对空对象的引用，空对象的数据类型是object
```
- 除了typeof可以检测数据类型以外，你知道的还有什么方法吗？
    - ==intanceof==  
    instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B。  
    instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型  
    instanceof 对于引用类型的支持很好，但他是无法对原始类型进行判断，所以一般都是在 typeof 判断为 object 时才使用 instanceof。
    ```
    console.log([] instanceof Array);       //true
    console.log({} instanceof Object);       //true
    console.log(new Date() instanceof Date);       //true
    console.log([] instanceof Object);       //true
    console.log(new Date() instanceof Object);       //true
    console.log("123" instanceof String);       //false
    
    > 由上我们可以看到由于原项链的关系，所有的对象实例都是可以间接的指向 Object 这个类的。
    ```
    
    - ==constructor==  
    constructor 可以打印出实例所属的类，表达式为：实例.constructor 。那么判断各种类型的方法就是:
    ```
    console.log([].constructor == Array);       //true
    console.log({}.constructor == Object);      //true
    console.log("string".constructor == String);        //true
    console.log((123).constructor == Number);       //true
    console.log(true.constructor == Boolean);       //true
    console.log([].constructor == Object)       // false
    ```
    - ==Object.prototype.toString.call()==  
    toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。  
    对于 Object 对象，直接调用 toString() 就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
    ```javascript
    console.log(Object.prototype.toString.call('')) ;       // [object String]
    console.log(Object.prototype.toString.call(1)) ;        // [object Number]
    console.log(Object.prototype.toString.call(true)) ;     // [object Boolean]
    console.log(Object.prototype.toString.call(undefined)) ;     // [object Undefined]
    console.log(Object.prototype.toString.call(null)) ;     // [object Null]
    console.log(Object.prototype.toString.call(new Function())) ;     // [object Function]
    console.log(Object.prototype.toString.call(new Date())) ;     // [object Date]
    console.log(Object.prototype.toString.call([])) ;     // [object Array]
    console.log(Object.prototype.toString.call(new RegExp())) ;     // [object RegExp]
    console.log(Object.prototype.toString.call(new Error())) ;     // [object Error]
    console.log(Object.prototype.toString.call(document)) ;     // [object HTMLDocument]
    console.log(Object.prototype.toString.call(window)) ;     //[object global] window 是全局对象 global 的引用
    ```
- 根据以上判断数据类型的方法，你能写出判断是不是数组，是否是字符串，是否是布尔值，是否是对象的判断方法吗？

- 对于undefined的理解？
```
1. 当我们声明了一个变量但未对其进行初始化时，它的默认值是undefined
2. 未声明的变量的默认值也是undefined，但未声明的变量只能进行typeof操作，检测类型，其他的操作都会报错
```
- 对于null的理解？
```
1. null指的是空对象的引用，这是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。
2. 只要意在保存对象的变量，应该将其的值初始化为null，这样不仅可以体现null作为空对象指针的惯例，而且有助于进一步区别null与undefined
```
- 说一说使用Boolean()将其他数据类型转化为布尔类型值？

数据类型 | 转化为true | 转化为false
---|---|---
Boolean | true | false
String | 任何非空字符串 | 空字符串
Number | 任何非零数字值（包括无穷大）| 0 和 NAN
Object | 任何对象| null
Undefined | × | undefined

- 0.1+0.2为什么不等于0.3？
```
0.1和0.2在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，此时就已经出现了精度的损失，相加后因浮点数小数位的限制而截断的二进制数字在转换为十进制就会变成0.30000000000000004。
```
- 说一说Number的常用方法
    - isFinite()
    - isNaN()
    - isInteger()
    - isSafeInteger()
    - parseInt()
    - parseFloat()
    - Number.prototype.tofixed([digits])
    ```
    let numObj = 12345.6789

    numObj.toFixed()       // Returns '12346': note rounding, no fractional part
    numObj.toFixed(1)      // Returns '12345.7': note rounding
    numObj.toFixed(6)      // Returns '12345.678900': note added zeros
    (1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
    (1.23e-10).toFixed(2)  // Returns '0.00'
    2.34.toFixed(1)        // Returns '2.3'
    2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
    2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
    -2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
    (-2.34).toFixed(1)  
    ```
    - Number.prototype.toString([radix])
    ```
    let x = 6

    console.log(x.toString(2))       // displays '110'
    console.log((254).toString(16))  // displays 'fe'
    
    console.log((-10).toString(2))   // displays '-1010'
    console.log((-0xff).toString(2)) // displays '-11111111'
    ```
    - Number.prototype.toLocalString()
    - Number.prototype.valueOf()
    ```
    let numObj = new Number(10)
    console.log(typeof numObj)  // object
    
    let num = numObj.valueOf()
    console.log(num)            // 10
    console.log(typeof num)     // number
    ```
    - Number.prototype.toExponential([fractionDigits]): 返回一个以指数表示形式表示Number对象的字符串。参数是指定小数点后的位数。默认为指定数字所需的位数。
    ```
    var numObj = 77.1234;

    console.log(numObj.toExponential());  // logs 7.71234e+1
    console.log(numObj.toExponential(4)); // logs 7.7123e+1
    console.log(numObj.toExponential(2)); // logs 7.71e+1
    console.log(77.1234.toExponential()); // logs 7.71234e+1
    console.log(77 .toExponential());     // logs 7.7e+1
    ```
    - Number.prototype.toPrecision([precision])以指定的精度返回表示对象的字符串
    ```
    let numObj = 5.123456

    console.log(numObj.toPrecision())    // logs '5.123456'
    console.log(numObj.toPrecision(5))   // logs '5.1235'
    console.log(numObj.toPrecision(2))   // logs '5.1'
    console.log(numObj.toPrecision(1))   // logs '5'
    
    numObj = 0.000123
    
    console.log(numObj.toPrecision())    // logs '0.000123'
    console.log(numObj.toPrecision(5))   // logs '0.00012300'
    console.log(numObj.toPrecision(2))   // logs '0.00012'
    console.log(numObj.toPrecision(1))   // logs '0.0001' 
    
    // note that exponential notation might be returned in some circumstances
    console.log((1234.5).toPrecision(2)) // logs '1.2e+3'
    ```
- 说一说你对isNaN的理解？
```
isNaN()在接受到了一个值以后，会尝试将其转化为数值。
如果不是数值的值：
1. 布尔值：true转化为1，false转化为0
2. 字符串：数字字符串会转化为对应数字，非数字字符串isNaN返回false
3. 对象：在基于对象使用isNaN()会先调用对象中的valueOf方法，根据返回值是否非数字进行下一步，如果返回值不是数字，则在继续调用对象方法上的toString()方法，根据返回值再判断
```
- 将其他数据类型的值转化为数值时，有几种方法？
    - Number()
    - parseInt()
    - parseFloat()
    - +/-
- 说一说上面方法的异同？  
它们两个都是可以将非数值转化为数值，不同点如下：
```
1. Number() 可以处理Boolean、null、undefined，Object而parseInt不可以
2. 在处理字符串时
    - number能处理数字字符串（正负），包括十六进制的数字以及空字符串；
    - parseInt是从第一个非空格字符开始解析，直到遇到一个非数字字符串，如果第一个不是数字或者负号，parseInt就会返回NaN
3. parseFloat()与parseInt()类似，+/-与Number()类似
```
- 说一说字符串的特点
```
字符串的是不可变的，意思是说字符串一旦被创建，要改变原来某变量保存的字符串，首先要创建一个对应的新字符串，然后再销毁原来的字符串，最后将新字符串填充到该变量上
```
- 将其他数据类型的值转化为字符串时，有几种方法？
    - 其他数据类型的值.toString()
    - String(其它数据类型的值)
    - 加号操作符将值与一个字符串加在一起
- 说一说上面方法的异同？
```
1. null与undefined上没有toString()方法，但Number()可以
2. 第三种方法有点像两种方法的结合
```