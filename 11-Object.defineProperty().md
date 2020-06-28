## 实现对对象的某个属性的监听
```javascript
      archiver.push({
        val: value
      })
    },
    get: function(){
      console.log('get')
      return value
    }
  })
}

var obj = new Watches('age');
obj.age; // get
obj.age = 11; // set
obj.age = 13; // set
console.log(obj.getArchive()); // [{ val: 11 }, { val: 13 }]
```

## 实现在html中的监听数据变化
```html
<span id="container">1</span>
<button id="button">点击加 1</button>
```
```javascript
var obj = {
  _value: 1
}
Object.defineProperty(obj, "value", {
  set: function(newVale){
    console.log(1)
    this._value = newVale
    document.getElementById('container').innerHTML = newVale
  },
  get: function(){
    return this._value
  }
})
document.getElementById('button').addEventListener('click',function(){
  obj.value += 1
})
```
## 实现在html中的监听数据变化之封装watch函数
```javascript
function watch(obj, name, func){
  var value = obj[name];
  Object.defineProperty(obj, name, {
      get: function() {
          return value;
      },
      set: function(newValue) {
          value = newValue;
          func(value)
      }
  });

  if (value) obj[name] = value
}
var obj = {
  value: 1
}

watch(obj, "value", function(newvalue){
  document.getElementById('container').innerHTML = newvalue;
})

document.getElementById('button').addEventListener("click", function(){
  obj.value += 1
});
```