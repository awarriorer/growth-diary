### 继承
----------

#### 原型链继承
``` js
// 夫类
function People(name){
    this.name = name;
}

// 夫类 getName方法
People.prototype.getName = function(){
    return this.name;
}

// 子类
function Uncle(sex){
    this.sex = sex;
}

// 继承
Uncle.prototype = new People('uncle-yang');

// 夫类 getSex 方法
Uncle.prototype.getSex = function(){
    return this.sex;
}

var uncleYang = new Uncle('Man');

console.log(uncleYang);
console.log(uncleYang.getSex()); // 'Man'
console.log(uncleYang.getName()); // 'uncle-yang'

//判断是否继承
console.log(uncleYang instanceof People); // true
```
* 实质是重写了原型对象
* 子类的新属性，必须写在继承之后
* 无法多继承
* 创建子类实例时，无法向夫类传递参数
* 父类中的引用类型属性会被实例共享

#### 构造继承
``` js
// 函数定义
function People(name){
    this.name = name;
}

// 原型追加getName方法
People.prototype.getName = function(){
    return this.name;
}

function Uncle(name, sex){
    People.call(this, name);
    // 或者：People.apply(this, [name]);

    this.sex = sex;
}

Uncle.prototype.getSex = function(){
    return this.sex;
}

var uncleYang = new Uncle('uncle-yang', 'Man');

console.log(uncleYang); // 拥有 name和sex属性
console.log(uncleYang.getSex()); // 'Man'
console.log(uncleYang.getName()); // 报错，没有该方法
```
* 子类实例无法访问父类的原型

#### 组合继承(最优推荐)
``` js
function People(name) {
    this.name = name;
}

People.prototype.getName = function() {
    return this.name;
}

function Uncle(name, age) {
    People.call(this, name);
    this.age = age;
}

Uncle.prototype = Object.create(People.prototype);

Uncle.prototype.getAge = function() {
    return this.age;
}

var uncleYang = new Uncle('uncle-yang', '30');

console.log(uncleYang);
console.log(uncleYang.getName());
console.log(uncleYang.getAge());
```

#### Es6 继承
``` js
class People {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Uncle extends People{
    constructor(name, age){
        super(name);

        this.age = age;
    }

    getAge(){
        return this.age;
    }
}

let uncleYang = new Uncle('uncle-yang', 30);

console.log(uncleYang);
console.log(uncleYang.getName()); // 'uncle-yang'
console.log(uncleYang.getAge()); // 30
```
#### 关系判断
``` js
function People(){
    this.name = 'uncle-yang';
}

function Uncle(){
    this.age = 30;
}

Uncle.prototype = new People();

var uncleYang = new Uncle();

/**
 * instanceof 运算符
 * 它期望两个操作数，一个对象和一个Constructor function，它将测试传递的函数原型属性是否存在于对象的链上
 * X instanceof Y, 判断的是X的prototype是否在Y的原型链上
 * Y instanceof X, 判断Y是否是X的一个实例（若Y是X的实例，那他也是X的父类的实例）
 */
uncleYang instanceof People; // true

/**
 * X.isPrototypeOf(Y)判断的是X对象是否在Y的原型链上，
 * 同样Y继承X的关系是X对象在Y对象的原型链上，即X.isPrototypeOf(Y)判断X是否继承至Y。
 */
People.prototype.isPrototypeOf(uncleYang); // true

// Object.getPrototypeOf(), ES6中新增的方法，用于获取子类的父类
Object.getPrototypeOf(Uncle.prototype) == People.prototype//true
```