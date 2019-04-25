### Promise
---------
先[了解Promsie用法](../js/promise.md)

#### 传统的回调有哪些问题
* 写法上回调地狱
* 调用回调时机过早、过晚、或者没有调用
* 调用回调次数过少或过多
* 未能传递所需的环境和参数
* 吞掉可能出现的错误和异常

#### Promsie 优点
* 相比传统的callback写法更简洁、接口更统一
* 支持链式调用

#### Promsie 缺点
* 在链式调用中，有异步产生的中间值需要计算和传递，需要包装对象或提升变量
* 在链式调用中，如果有根据判断来确定是否返回promise，就显得力不从心
* 无法获取当前执行进度信息
* 不能取消执行，比如一串promsie在执行，其中第一个异步执行拿到结果后，判断后续的动作不应该再执行

关于 Promise 我们知道它的用法，它用极其简单的API带我们逃离了回调地狱。它的用法可以[点击这里](../js/promise.md)查看。其中它主要的API有如下几个：
* then: 成功时执行
* catch: 拒绝时执行
* finally: 最终执行
* resolve: 主动调用成功
* reject: 主动调用失败
* all: 依次执行多个promise
* race: 并发执行多个promsie，直到成功或者被拒绝

使用Promise的时候请注意
* Promise的设计是基于状态的，`pedding`到`、fulfilled/、rejected`的状态时单向且唯一的
* resolve和reject只会执行一种状态
* 所有API都会返回一个Promise对象

#### 简单的实现
``` js
function MyPromise(fun){
    var value = null, // 缓存结果
        // 当前promise的状态,pending(进行中)、fulfilled(成功)、rejected(失败)
        state = 'pending',
        callbacks = []; // 执行队列

    // then 方法的实现
    this.then = function(onFulfilled, onRejected){
        /**
        * 为了链式调用，返回一个新的实例
        * 可以理解成：
        *   下一个将要执行的内部的Promsie
        *   两个then方法中间的连接器
        */
        return new MyPromise(function(resolve, reject){
            handle({
                onFulfilled: onFulfilled || null, //把reslove和reject回调函数传入handle
                onRejected: onRejected || null,
                resolve: resolve, // 把新Promsie将要执行的resolve和reject传入handle
                reject: reject,
            });
        });
    }

    // catch的实现，其实就是包装了一次then方法
    this.catch = function(onRejected){
        this.then(undefined, onRejected);
    };

    // 执行体
    function handle(obj){
        /**
        * 还未完成，那么添加到队列
        * 这个队列里面存储了
        *   当前promsie要执行的onFulfilled和onRejected
        *   下一个promsie要执行的onFulfilled和onRejected，(连接器)
        */
        if(state == 'pending'){
            callbacks.push(obj);

            return;
        }

        // 根据状态确认要执行的函数，成功还是拒绝
        var cb = state === 'fulfilled' ? obj.onFulfilled : obj.onRejected;

        // 如果没有传入回调函数，那么执行其对应的resolve或者reject
        if(cb === null){
            cb = state === 'fulfilled' ? obj.resolve : obj.reject;

            cb(value);

            return;
        }

        // 如果传入了函数
        try{
            // 拿到其执行的结果
            var ret = cb(value);
            // 拿到回调函数的执行结果后，调用下一个promise的resolve
            obj.resolve(ret);
        }catch(err){
            // 如果在执行回调函数时异常或者报错，那么调用reject
            obj.reject(err);
        }
    }

    // resolve()
    function resolve(newValue){
        // 如果是链式调用，那么newValue是一个promsie实例
        if(newValue && (typeof newValue === 'object' || typeof newValue == 'function')){
            var then = newValue.then;

            if(typeof then === 'function'){
                then.call(newValue, resolve);

                return;
            }
        }

        state = 'fulfilled';
        value = newValue;

        // 通过setTimeout机制，将resolve的执行逻辑放置到js任务队列末尾，以保证在执行resolve时，then方法的回调函数已经完成注册
        setTimeout(function(){
            callbacks.forEach(function(callback){
                handle(callback);
            });
        }, 0);
    }

    // 拒绝
    function reject(){
        state = 'rejected';
        value = reason;
        execute();
    }

    function execute() {
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                handle(callback);
            });
        }, 0);
    }

    // 执行实例化Promise时传入的回调函数
    fun(resolve, reject);
}
```