### Object
-------

js中的对象，以键值对的形式存储数据，其中键只能是字符串。常用方法如下

#### 查
``` js
var myObj = {
    name: 'uncle-yang',
    sex: 'man'
};

//判断对象中是否有某个key
console.log(myObj.hasOwnProperty('name')); // true
console.log(myObj.hasOwnProperty('age')); // false

//访问某一个值
cosnole.log(myObj.name); // 'uncle-yang'
cosnole.log(myObj['name']); // 'uncle-yang'

// 获取所有的key
console.log(Object.keys(myObj)); //["name", "sex"]

// 获取所有的value
console.log(Object.values(myObj)); //["uncle-yang", "man"]

// 循环遍历
for(var key in myObj){
    console.log(key); //依次输出： "name", "sex"
    console.log(myObj[key]); //依次输出："uncle-yang", "man"
}


// defineProperty
var likeVal = '';

// 这个方法因为能监听到数据的变化，因此在mvve的框架中，也承担着重要的作用。
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
        console.log('设置值的时候，这里将被调用');

        likeVal = val;
    }
});

myObj.like = 'sleep'; // 调用set方法

console.log(myObj.like); // 调用get方法
```

#### 改
``` js
var myObj = {
    name: 'uncle-yang',
    sex: 'man'
};

myObj.name = '大叔·杨';

console.log(myObj.name); // '大叔·杨'
```
#### 增
``` js
var myObj = {
    name: 'uncle-yang',
    sex: 'man'
};

// 添加属性
myObj.like = 'sleep';

//合并对象
tempObj = Object.assign(myObj, {
    age: 28
});

console.log(tempObj); // tempObj拥有myObj所有的属性以及age属性

//检查object的原型,从而也说明了assign是返回了一个全新的对象，和myObj并没有关系
console.log(Object.getPrototypeOf(tempObj) == myObj); // false
```

#### 删
``` js
var myObj = {
    name: 'uncle-yang',
    sex: 'man'
};

delete myObj.name;

console.log(myObj); // {sex: 'man'}
```

#### 判断
``` js
var myObj = {
    name: 'uncle-yang',
    sex: 'man'
};

// 判断两个值是否相同
console.log(Object.is('a', 'a')); // true

// 判断两个对象是否相同
console.log(Object.is(myObj, {
    name: 'uncle-yang',
    sex: 'man'
})); // false, 指向不同的内存空间

var myObj_1 = myObj;
console.log(Object.is(myObj, myObj_1)); // true
```