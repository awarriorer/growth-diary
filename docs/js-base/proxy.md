### Proxy
----------
Proxy对象用于定义基本操作的自定义行为。

#### 例子
``` js
let obj = {
    name: 'uncle-yang',
    sex: 'man'
};

// 代理obj对象
let proxyObj = new Proxy(obj, {
    //当执行proxy.foo时触发
    get: (target, name) => {
        if(target.hasOwnProperty(name)){
            return target[name]
        }else{
            return `this object not has ${name}`;
        }
    },
    //当执行proxy.foo = val时触发
    set: (target, name, val) => {
        console.log(`target will set ${name}: ${val}`);

        target[name] = val;
    },
    //当判断代理对象是否拥有某个属性时触发, 'foo' in proxy
    has(target, name){
        cosnole.log(target)
        cosnole.log(name)
    },
    // 当删除某个值时触发， delete proxy.foo
    deleteProperty(){},
    
    //读取原型时触发, Object.getProtoTypeOf(proxy)
    getPrototypeOf(){},
    // Object.setProtoTypeOf(proxy, null);
    setProtoTypeOf(){},

    //定义某个属性的描述是触发， Object.defineProperty(proxy, 'foo', {});
    defineProperty(){},

    //当代理目标为函数，且被调用时触发
    apply(){},
    //实例化构造函数时触发
    construct(){},
});

console.log(proxyObj.name); // 'uncle-yang'
console.log(proxyObj.sex); // 'man'
console.log(proxyObj.age); // 'this object not has age'

//给代理设置新的属性，原对象也会被
proxyObj.like = 'code'; // target will set like: code

console.log(obj.like); // 'code'

```