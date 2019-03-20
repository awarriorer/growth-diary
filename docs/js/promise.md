### Promise
-----------
在Promise还未出现之前，我们使用callback(回调函数)来实现异步操作，若一个动作需要很多异步接口，那将会产生回调嵌套，随之而来的问题是代码的可读性变差，变量名被污染，逻辑混乱。虽然我们会通过一些异步插件(如：node中的async)来实现异步的同步操作。但是其本质还是将回调传进函数内部。而Promise 本质上是一个绑定了回调的对象，而不是将回调传进函数内部。


#### 基本用法
``` js
//创建 Promise实例
var promise = new Promise((resolve, reject) => {
    let a = 1;
    
    //异步操作, 两秒后a+1
    setTimeout(() => {
        a += 1;
        // 成功时执行
        resolve(a);
    }, 2000);
    //异步操作，三秒后检查报异常
    setTimeout(() => {
        if(a !== 2){
            //失败时执行
            reject('error: a = 2');
        }
    }, 3000);

});

/**
 * then(onFulfilled, onRejected),成功时执行，
 * onFulfilled: 
 *      1:类型为函数,该函数接受一个参数，作为最终处理的结果
 *      2:当promise为可接受状态时执行(promise内部调用resolve()时执行)
 *      3:若传入的不是一个函数，那么在内部会被替换成(x) => x
 * onRejected:
 *      1:类型为函数，接受一个参数，作为被拒绝的理由
 *      2:promsie调用reject()时执行
 * 
 * 返回值
 *      1: 该方法返回一个promise对象
 *      2: 它的行为与then中的回调函数的返回值有关,
 *         若在then中return 3,那么将会调用Promise.resolve(4),从而返回一个新的promise
 */
promise.then((result) => { 
    console.log(result)

}, (err) => {
    console.log(err)
})

/**
 * catch(onRejected),被拒绝时执行，相当于then(undefined, onRejected)
 * onRejected:
 *      1:类型为函数，接受一个参数，作为被拒绝的理由
 *      2:promsie调用reject()时执行
 * 
 * 返回值
 *      1: 该方法返回一个promise对象
 *      2: 它的行为与catch中的回调函数的返回值有关,
 *         如果 onRejected 抛出一个错误或返回一个本身失败的Promise,通过catch()返回的Promise 被rejected；
 *         否则，它将显示为成功（resolved）
 */
promise.catch((err) => { // cathc(),异常时执行，
    console.log(err)
})

/**
 * finally()
 * 无论是resolve,还是reject时，都会在执行then()和catch()后执行
 * 返回一个设置了finally的Promise对象
 * 
 */
promise.finally((res) => {
    //res时resolve的参数，或者是reject的参数
});

/**
 * Promise.resolve(reason)方法返回一个带有接受reason参数的Promise对象。 
 */
Promise.resolve('abc').then((res) => {
    console.log(res); //abc
})

/**
 * Promise.reject(reason)方法返回一个带有拒绝原因reason参数的Promise对象。 
 */
Promise.reject('abc').catch((res) => {
    console.log(res); //abc
})

/**
 * Promise.all(iterable) 
 *      方法返回一个 Promise 实例，此实例在 
 *      iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；
 *      如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。
 * 
 */
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});


/**
 * Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
 * 
 */
var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, "one"); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "two"); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});

var p5 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, "five"); 
});
var p6 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // 未被调用             
}, function(reason) {
  console.log(reason); // "six"
  // p6 更快，所以它失败了
});
```