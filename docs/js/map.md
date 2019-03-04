### Map
-------

`Map(es6)`是对es5中`Object`的一种拓展，也是以键值对的形式存储数据。但是在`Map`中，任何值(对象或者原始值)都可以作为一个键或者一个值。其中`Map`和`Object`的差别如下表。

|对比项|Object|Map|备注|
|:----|:-----:|:-------:|------:|
|键的类型|字符串|任意值(包括array, object, function，基本类型)||
|键的顺序|无序|有序，按照键插入的顺序排序|
|获取大小|便利所有键手动计算|调用Map.size||
|迭代|先获取key，再获取值|可以直接迭代||

下面是map的基本用法：

#### 查
``` js
var myMap = new Map();
var keyObj  = {};
var keyFunc = function(){};
var keyStr  = 'uncle-yang';

// add key
myMap.set(keyObj, 'key object');
myMap.set(keyFunc, 'key function');
myMap.set(keyStr, 'key string');

// get size
console.log(myMap.size); // 3

// 判断map中，是否有值
console.log(myMap.has(keyObj)); // true
console.log(myMap.has({})); // false

// 获取值
console.log(myMap.get(keyObj)); // 'key object'
console.log(myMap.get(keyFunc)); // 'key function'
console.log(myMap.get(keyStr)); // 'key string'

console.log(myMap.get({})); // undefined, 这里是个新的对象，和keyObj是两个不同的对象，在内存中有着不同的空间
console.log(myMap.get(function(){})); // undefined， 原因同上
console.log(myMap.get('uncle-yang')); // 'key string'


// 查看Map中的所有的key
var keys = myMap.keys();
console.log(keys.next().value); // {}
console.log(keys.next().value); // function(){}
console.log(keys.next().value); // 'uncle-yang'

// 查看Map中的所有的value
var values = myMap.values();
console.log(values.next().value); // 'key object'
console.log(values.next().value); // 'key functin'
console.log(values.next().value); // 'key string'

//以数组的方式获取map中的键值对
var mapIter = myMap.entries();
console.log(mapIter.next().value); // [{}, 'key object']
console.log(mapIter.next().value); // [function(){}, 'key functin']
console.log(mapIter.next().value); // ['uncle-yang', 'key string']

// 循环遍历
myMap.forEach((value, key, map)=>{
    console.log(key); // 依次输出： {}, function(){}, 'uncle-uang'
    console.log(value); // 依次输出：'key object'，'key functin'，'key string'
});
```
#### 改
``` js
var myMap = new Map();
myMap.set('name', 'uncle-yang');
console.log(myMap.get('name')); // 'uncle-yang'

//更改
myMap.set('name', '大叔·杨');
console.log(myMap.get('name')); // 'name'
```
#### 增
``` js
var myMap = new Map();
var keyObj  = {};
var keyFunc = function(){};
var keyStr  = 'uncle-yang';

// add key
myMap.set(keyObj, 'key object');
myMap.set(keyFunc, 'key function');
myMap.set(keyStr, 'key string');
```
#### 删
``` js
var myMap = new Map();
var keyStr  = 'uncle-yang';

// add key
myMap.set(keyStr, 'key string');

// 添加一个值
myMap.set('temp', 'abc');
console.log(myMap.get('temp')); // 'abc'

//删除这个key
myMap.delete('temp');
console.log(myMap.has('temp')); // false
console.log(myMap.get('temp')); // undefined


// 清空map所有的键值对
myMap.clear();

console.log(myMap.size); // 0
```
