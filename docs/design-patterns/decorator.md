### 装饰器模式(Decorator)
-----------

装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能。

#### 优点
* 拓展类的功能
* 动态增加，动态撤销

#### 缺点
* 若产生过多的相识的对象，不易排错

#### demo
``` js
class Personal{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.extends = {};
    }

    sayHello(){
        console.log(`hello, i'm ${this.name}`)
    }

    regiesterDecorator(name, handle){
        if(this.extends[name]){
            console.log(`该名称(${name})的装饰器已经被注册`);
        } else {
            let doHandle = (...arg) => {
                return handle.apply(this, arg)
            }

            this.extends[name] = doHandle;
            this[name] = doHandle;
        }
    }

    removeDecorator(name){
        if(this.extends[name]){
            delete this.extends[name];
            delete this[name];
        }else{
            console.log(`该名称(${name})的装饰器已经被注册`);
        }
    }
}

let uncle = new Personal('uncle-yang', 30);

uncle.sayHello(); // 'hello, i'm uncle-yang'

uncle.regiesterDecorator('sayAge', function(){
    console.log(`I'm ${this.age} years old.`);
    console.log(this)
});

uncle.sayAge(); // 'I'm 30 years old.'

uncle.removeDecorator('sayAge'); //删除方法
uncle.sayAge(); // Uncaught TypeError: uncle.sayAge is not a function
```