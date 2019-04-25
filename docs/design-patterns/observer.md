### 观察者模式
-----------
当一个对象被修改时，则会自动通知它的依赖对象

#### 优点
* 观察者和被观察者是抽象耦合的
* 建立一套触发机制

#### 缺点
* 如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间
* 如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃
* 观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化

#### 使用场景
* 一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度
* 一个对象必须通知其他对象，而并不知道这些对象是谁


#### 例子
``` js
class Config{
    constructor(opt){
        this.cfg = opt;
        this.watchs = {};
    }

    get(key){
        return this.cfg[key];
    }

    set(key, val){
        let oldVal = this.cfg[key];
        this.cfg[key] = val;

        if(this.watchs[key]){
            this.watchs[key].forEach((handle) => {
                // 如果不加try catch,一旦handle报错，那么执行的队列会被终止执行
                try{
                    handle(val, oldVal)
                }catch(err){
                    console.error(err)
                }
            })
        }
    }

    watch(name, handle){
        if(this.watchs[name]){
            this.watchs[name].push(handle)
        }else{
            this.watchs[name] = [handle]
        }
    }
}

let config = new Config({
    name: 'uncle-yang',
    age: 30
})

// 监听name
config.watch('name', function(newVal, oldVal){
    console.log(`name 的值由${oldVal} 更改为 ${newVal}`)
})

// 监听name, 注意，这里会报错
config.watch('name', function(newVal, oldVal){
    console.log(`name 的值由${abc} 更改为 ${newVal}`)
})

// 监听name
config.watch('name', function(newVal, oldVal){
    console.log(`你好，我是${newVal}, 我原来的名字是${newVal}`)
})

// 监听age
config.watch('age', function(newVal, oldVal){
    console.log(`age 的值由${oldVal} 更改为 ${newVal}`)
})

config.set('name', '大叔·杨');
/*
    输出
    name 的值由uncle-yang 更改为 大叔·杨
    ReferenceError: abc is not defined
    你好，我是大叔·杨, 我原来的名字是大叔·杨
*/

config.set('age', 31);
// 输出 age 的值由30 更改为 31
```