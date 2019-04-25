### Generator
----------
Generator 函数是协程(个线程互相协作，完成异步任务)在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。其目的是提供一种异步编程解决方案。

简单的demo
``` js
function* helloUncle() {
    // yiled 会暂停执行，直到调用next(),会执行到当前yiled和下一个yiled/return之间的语句
    yield 'hello';
    yield 'uncle-yang';
    return `I'm uncle-yang`
}

// 调用后，并不执行
let hello = helloUncle();

// 返回一个遍历器对象，代表 Generator 函数的内部指针
console.log(hello); 

/*
* 返回 {value: '内部状态的值，yiled后面的值', done: boolean，标示遍历是否结束}*/
console.log(hello.next()); //  {value: 'hello', done: false}

// 返回 {value: 'uncle-yang', done: false}
console.log(hello.next());

// 返回 {value: "I'm uncle-yang", done: true}
console.log(hello.next());

// 返回 {value: undefined, done: true}
console.log(hello.next());
```

#### for...of循环
for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。
``` js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
for (let v of foo()) {
  console.log(v);
}
// 一旦next方法的返回对象的done属性为true，for...of循环就会中止.且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。
// 1 2 3 4 5
```