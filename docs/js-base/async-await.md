### Async await
---------
`async function` 关键字用来在表达式中定义异步函数;

#### 例子
``` js
// 定义函数，返回一个Promise,1秒后完成，
function f1(){
    return new Promise(resolve => {
        setTimeout(resolve, 3000, 1);
    });
}

// 定义函数，直接返回，2
function f2(){
    return 2;
}

// 定义函数，返回一个Promise,3秒后完成，
function f3(){
    return new Promise(resolve => {
        setTimeout(resolve, 3000, 3);
    });
}

async function f(x){
    let a = await f1(); // 1秒后返回1, a = 1
    let b = await f2(); // a执行完成后，直接执行 f2, b = 2
    let c = await f3(); // b执行完成后，执行f3，3秒后，c = 3

    return x + a + b + c;
}

// 返回一个Promise对象，
let f_val = f(4);

// 当f()有返回值(return)时，返回的Promsie中的resolve负责专递这个值
f_val.then(res => {
    // 执行时间: 1s + 3s = 4s
    console.log(res); // 4秒后输出10
}).catch(err => {
    //捕获在f()中执行的所有错误
    console.error(err);
});


//定时器并行执行
async function d(x){
    let a = f1(); // 马上执行，得到promise
    let b = f2(); // 马上执行，2
    let c = f3(); // 马上执行，得到promise

    return x + await a + await b + await c;
}

// 返回一个Promise对象，
let d_val = d(4);

// 当f()有返回值(return)时，返回的Promsie中的resolve负责专递这个值
d_val.then(res => {
    // 执行时间: 等于最长计时器，f3的3秒
    console.log(res); // 3秒后，输出10
}).catch(err => {
    //捕获在f()中执行的所有错误
    console.error(err);
});
```
