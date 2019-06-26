### Class
-------

#### 日常用法
``` js
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 构造函数方法
    sayName(){
        return this.name;
    }

    sayAge(){
        return this.age;
    }

    // 取值函数
    get sex(){
        return `man`
    }

    // 存值函数
    set sex(newName){
        console.log(`setter name is ${newName}`);
    }

    /*
    * 静态方法
    * 如果静态方法中包括this,那么this指向class构造函数而不是实例
    * */
    static hello(){
        console.log('hello everyone!');
    }
    /*
    * 静态方法调用静态方法
    * */
    static goodbye(){
        console.log(this)
        this.hello();

        console.log('goodbye everyone!');
    }

    // 构造方法调用静态方法
    sayHello(){
        this.constructor.hello();
    }
}

let uncle = new People('大叔·杨', 30);

uncle.sayName(); // '大叔·杨'
uncle.sayAge(); // 30
uncle.sayHello();
// getter & setter
console.log(uncle.sex);
uncle.sex = 'big man'
console.log(uncle.sex);

// class name属性
console.log(People.name); // 'People'

// 调用静态方法
People.hello(); // 'hello everyone!'
People.goodbye(); // 'hello everyone!'; 'goodbye everyone!'
```

