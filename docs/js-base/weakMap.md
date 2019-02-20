### WeakMap
-------

WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的(其主要主要空能和之前的[Map](./map.md)基本上一项，只是所有的key必须是对象，数组，或者function)

#### 基本用法
``` js
// 声明
var weakMap = new WeakMap();

var keyObj  = {};
var keyFunc = function(){};
var keyStr  = 'uncle-yang'; 

//set
weakMap.set(keyObj, 'key object');
weakMap.set(keyFunc, 'key function');
weakMap.set(keyStr, 'key string'); // 报错： Invalid value used as weak map key

// 判断map中，是否有值
console.log(weakMap.has(keyObj)); // true
console.log(weakMap.has({})); // false

// 获取值
console.log(weakMap.get(keyObj)); // 'key object'
console.log(weakMap.get(keyFunc)); // 'key function'

console.log(weakMap.get({})); // undefined, 这里是个新的对象，和keyObj是两个不同的对象，在内存中有着不同的空间
console.log(weakMap.get(function(){})); // undefined， 原因同上


//删除
weakMap.delete(keyObj);
weakMap.delete(keyFunc);

console.log(weakMap.has(keyObj)); // false

```