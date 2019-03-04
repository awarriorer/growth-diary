### Function
-------

function(函数)，是js调用执行的执行单元。在 JavaScript 中, 每个函数实际上都是一个Function对象.

#### 函数定义
``` js
//函数声明式
function sum(a, b){
    return a + b;
}

// 函数表达式
var sum_a = function(a, b){
    return a + b;
}

//自调用函数
(function(a, b){
    console.log(a + b);
})(1, 2);

//箭头函数,只能通过表达式声明
let sum_b = (a, b) => {
    return a + b;
}

console.log(sum_b(1, 2));
```
::: tip
函数声明式和函数表达式都可以创建出一个函数。但其中函数声明式，会被前置加载并且定义，但是函数表达式只有执行完表达式之后才能被调用执行。例子如下
``` js
console.log(sum(1, 2)); // 3
//函数声明式
function sum(a, b){
    return a + b;
}
console.log(sum_a); // undefined
console.log(sum_a(1, 2)); //报错, sum_a is not a function
// 函数表达式
var sum_a = function(a, b){
    return a + b;
}
console.log(sum_a(1, 2)); //3
```
:::

#### 常用函数属性
``` js
function sum(a, b){
    return a + b;
}

// 函数表达式
var sum_a = function(a, b){
    return a + b;
}

//函数名称
console.log(sum.name); // 'sum'
console.log(sum_a.name); // 'sum_a'

//函数所需要传入的参数个数
console.log(sum.length); // 2
console.log(sum_a.length); // 2

//获取传入函数的所有参数
function abc(){
    // agrument对象是所有（非箭头）函数中都可用的局部变量
    var args = arguments;

    //参数
    // console.log(args); // ["you", "and", "me"]
    //参数长度
    // console.log(args.length);
    // 查看第一个参数
    // console.log(args[0]);

    //注意 argument并不是一个数组，且不可以使用数组的方法，pop,push等，如果需要转化成数组操作，可以这样

    //通过from，把类数组变成数组
    var args_arr_a = Array.from(arguments);

    console.log(args_arr_a); // ["you", "and", "me"]

    var args_arr_b = Array.prototype.slice.call(arguments);

    console.log(args_arr_b); // ["you", "and", "me"]

    var args_arr_c = [].slice.call(arguments);

    console.log(args_arr_c); // ["you", "and", "me"]

    var args_arr_d = [...arguments];

    console.log(args_arr_d); // ["you", "and", "me"]

}

abc('you', 'and', 'me');
```

#### 改变this指向，bind()
``` js
var weber = {
    name: 'uncle-yang',
    getName: function(){
        return this.name;
    }
}

console.log(weber.getName()); // 'uncle-yang',其中this指向weber

var getName = weber.getName;

console.log('getNmae', getName()); // undefined, this指向window

var uncle = {
    name: '大叔·杨'
}

getName = getName.bind(uncle);

console.log(getName()); // '大叔·杨', 此时，this指向 uncle

console.log(weber.getName()); // 'uncle-yang',其中this指向weber

var getName_a = weber.getName.bind(uncle);

console.log(getName_a()); // '大叔·杨', 此时，this指向 uncle
```

#### 改变this指向之：applay() & call()
apply()方法的作用和 call() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

``` js
function sum(c, d){
    return this.a + this.b + c + d;
}

var temp_a = {
    a: 1,
    b: 2
}

console.log(sum.call(temp_a, 3, 4)); // 10, this指向temp_a
console.log(sum.apply(temp_a, [3, 4])); // 10, this指向temp_a
```