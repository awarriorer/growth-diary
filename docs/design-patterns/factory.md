### 工厂模式(Factory)
------
建立一个工厂类，对实现了同一接口的一些类进行实例的创建

#### 适用于
* 创建对象需要大量重复的代码
* 创建对象需要访问某些信息，而这些信息不应该包含在复合类中
* 创建对象的生命周期必须集中管理，以保证在整个程序中具有一致的行为

#### 例子
``` js
class Personal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }

    sayAge() {
        console.log(`I'm ${this.age} year old`);
    }
}

let xx = new Personal('xx', 30)

xx.sayHello(); // Hello, I'm xx
xx.sayAge(); // I'm 30 year old

// 继承，
class Yy extends Personal {
    constructor(name, age) {
        super(name, age)

        this.name = name;
    }

    // 添加新方法
    sayName() {
        console.log(this.name)
    }
}

let yy = new Yy('yy', 40)

yy.sayHello(); // Hello, I'm yy
yy.sayAge(); // I'm 40 year old
yy.sayName(); // yy
```