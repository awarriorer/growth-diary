### 作用域链 & 原型链
----------

#### 作用域链
* 当执行一段JavaScript代码（全局代码或函数）时，JavaScript引擎会创建为其创建一个作用域又称为执行上下文（Execution Context），在页面加载后会首先创建一个全局的作用域，然后每执行一个函数，会建立一个对应的作用域，从而形成了一条作用域链。每个作用域都有一条对应的作用域链，链头是全局作用域，链尾是当前函数作用域。

* 作用域链的作用是用于解析标识符，当函数被创建时（不是执行），会将this、arguments、命名参数和该函数中的所有局部变量添加到该当前作用域中，当JavaScript需要查找变量X的时候（这个过程称为变量解析），它首先会从作用域链中的链尾也就是当前作用域进行查找是否有X属性，如果没有找到就顺着作用域链继续查找，直到查找到链头，也就是全局作用域链，仍未找到该变量的话，就认为这段代码的作用域链上不存在x变量，并抛出一个引用错误（ReferenceError）的异常

``` js
var name = 'uncle-yang';
var age = '30';

function show(){
    var name = '大叔·杨'

    console.log(name); // '大叔·杨'
    console.log(age); // 30
    console.log(sex); // ReferenceError: sex is not defined
}

show();

```

#### 原型链
* JavaScript中的每个对象都有一个prototype属性，我们称之为原型，而原型的值也是一个对象，因此它也有自己的原型，这样就串联起来了一条原型链，原型链的链头是object,它的prototype比较特殊，值为null。

* 原型链的作用是用于对象继承，函数A的原型属性(prototype property)是一个对象，当这个函数被用作构造函数来创建实例时，该函数的原型属性将被作为原型赋值给所有对象实例，比如我们新建一个数组，数组的方法便从数组的原型上继承而来。

* 当访问对象的一个属性时, 首先查找对象本身, 找到则返回; 若未找到, 则继续查找其原型对象的属性(如果还找不到实际上还会沿着原型链向上查找, 直至到根). 只要没有被覆盖的话, 对象原型的属性就能在所有的实例中找到，若整个原型链未找到则返回undefined。

``` js
// 函数定义
function People(name, age){
    this.name = name;
    this.age = age;
}

// 原型追加getName方法
People.prototype.getName = function(){
    return this.name;
}

// 原型追加getAge方法
People.prototype.getAge = function(){
    return this.age;
}

// 实例People对象
var uncle = new People('uncle-yang', '30');

console.log(uncle);
console.log(uncle.getName());
console.log(uncle.getAge());

```