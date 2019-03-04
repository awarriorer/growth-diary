### Set
-------

`Set(es6)`是对es5中`Array`的一种拓展。

|对比项|Array|Set|备注|
|:----|:-----:|:-------:|------:|
|值的重复性|不可重复|可重复||

下面是Set的基本用法：

#### 查
``` js
var mySet = new Set();
var keyObj  = {};
var keyFunc = function(){};
var keyStr  = 'uncle-yang';

// add key
mySet.add(keyObj);
mySet.add(keyFunc);
mySet.add(keyStr);

// get size
console.log(mySet.size); // 3

// 判断Set中，是否有值
console.log(mySet.has(keyObj)); // true
console.log(mySet.has({})); // false

// 查看Set中的所有的value
var values = mySet.values();
console.log(values.next().value); // {}
console.log(values.next().value); // function(){}
console.log(values.next().value); // 'uncle-uang'

// 循环遍历
for(let item of mySet){
    console.log(key); // 依次输出： {}, function(){}, 'uncle-uang'
}

mySet.forEach((item, Set)=>{
    console.log(item); // 依次输出： {}, function(){}, 'uncle-uang'
});
```

#### 增
``` js
var mySet = new Set();
var keyObj  = {};
var keyFunc = function(){};
var keyStr  = 'uncle-yang';

// add key
mySet.add(keyObj);
mySet.add(keyFunc);
mySet.add(keyStr);
```
#### 删
``` js
var mySet = new Set();
var keyStr  = 'uncle-yang';

// add key
mySet.add(keyStr);

// 添加一个值
mySet.add('temp');

//删除这个key
mySet.delete('temp');
console.log(mySet.has('temp')); // false
console.log(mySet.get('temp')); // undefined

// 清空Set所有的键值对
mySet.clear();

console.log(mySet.size); // 0
```
