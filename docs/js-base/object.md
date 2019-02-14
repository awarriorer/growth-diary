### Object
js中的对象，以键值对的形式存储数据。其中键只能是字符串。

常用方法
``` js
var myObj = {
    name: 'uncle-yang',
    sex: 'man'
};

//判断对象中是否有某个key
console.log(myObj.hasOwnProperty('name')); // true
console.log(myObj.hasOwnProperty('age')); // false

//合并对象
tempObj = Object.assign(myObj, {
    age: 28
});

console.log(myObj); // tempObj拥有myObj所有的属性以及age属性

//检查object的原型,从而也说明了assign是返回了一个全新的对象，和myObj并没有关系
console.log(Object.getPrototypeOf(tempObj) == myObj); // false


// 判断两个值是否相同
console.log(Object.is('a', 'a')); // true

console.log(Object.is(myObj, {
    name: 'uncle-yang',
    sex: 'man'
})); // false, 指向不同的内存空间

var myObj_1 = myObj;
console.log(Object.is(myObj, myObj_1)); // true

// 获取所有的key
console.log(Object.keys(myObj)); //["name", "sex"]

// 获取所有的value
console.log(Object.values(myObj)); //["uncle-yang", "man"]

// 循环便利
for(var key in myObj){
    console.log(key); //依次输出： "name", "sex"
    console.log(myObj[key]); //依次输出："uncle-yang", "man"
}

// defineProperty
var likeVal = '';

Object.defineProperty(myObj, 'like', {
    // configurable: true | false, 是否可以更改描述
    // enumerable: true | false, 是否可以枚举
    // value: 'value', 默认值，但是不能和get和set同时使用，
    // writable: true | false, 是否可以复写value
    get: function(){ // 获取值
        console.log('获取值的时候，这里将被调用');
        return likeVal;

    },
    set: function(val){ // 设置值
        likeVal = val;
        console.log('设置值的时候，这里将被调用');
    }
});

myObj.like = 'sleep'; // 调用set方法

console.log(myObj.like); // 调用get方法
```