### Async await的实现
----------
先[了解async await的用法](../js/async-await.md)

#### Async的作用是什么？
* `async`申明一个函数是异步的
* 返回一个`Promise`对象，`return Promise.resolve('函数内返回的值或者undefined')`

#### await在等待什么？
* await 等待一个异步函数执行完成，await 只能在 async 函数中
* await 是一个表达式，这个表达式的结果是promise对象或者其他值
    * 如果等到的是一个直接变量，那么继续往下执行运算
    * 如果等到的是一个promise，它会阻塞后面的代码，等待promise.resove的执行，并且拿到resove的值，作为的await的结果

#### 已经有了Promise，为什么还要 Async await?
先[了解Promsie和它的的优缺点](../js/promise.md)

Async await的优势
* 语法简洁清晰
* 错误处理，可以直接用`try...catch`来捕获异常
* 添加条件判断，可`通过return`直接中断执行，更符合直觉
* 减少不必要的中间变量
* 更清晰明确的错误堆栈
* 方便调试，可以给每个异步动作添加断点

#### async await的缺点是什么？
* `Async/Await` 并不能很好的支持异步并发
* `async`默认返回`Promsie`,这意味着`Promise`中存在的问题，`async`也会遇到，最典型的是会静默吞掉异常。所以虽然`async/await`中可以通过`try...catch`捕获`await`中的异常，但是不得不给所有的`await`添加`try...catch`，否则`async`函数返回的只是一个执行了`reject`的`promsie`
* 因为兼容问题，需要babel编译，编译后的代码臃肿而简陋