### 内存机制
--------
javaScript的内存管理机制是:内存在变量（对象，字符串等等）创建时分配，然后在他们不再被使用时“自动”释放。后者被称为垃圾回收。理解内存机制，对理解值引用，作用域，原型链，闭包等问题都有着重要作用。

#### 简解内存机制
``` js
// 定义函数，分配内存
function foo(){
    var a = 1; //定义变量，分配内存

    console.log(a); // 使用内存
}

// 使用内存
foo();
//内部变量a使用完毕，a所用的内存被释放
```
* 分配: 当声明变量、函数、对象的时候，系统将分配内存
* 使用: 读、写
* 回收: 不需要时将内存释放/归还

#### 内存空间--栈
``` html
<script>
    function foo(){
        var a = 1;

        console.log(a);
    }
    foo();
</script>
```
这段代码运行时会经历以下的内存变化流程
1. js运行加载window对象: 创建出window内存
2. 定义全局foo函数，创建出foo内存
3. 执行foo函数
4. 定义变量 a, 创建出a内存
5. `console.log(a)`,访问a内存
6. foo()执行完毕，a内存销毁
7. 内存中只剩下window和foo,直到页面卸载时这两个内存空间才会被销毁

这种内存存储的方式称之为栈。其遵循先进后出，后进先出的原则。就像上面的例子，window对象先挂载，直到页面卸载时，window对象才会被销毁。像是

其中基础类型(`String, Number, Null, Undefined, boolean`)的变量将直接存储在栈内存中，

#### 内存空间--堆
``` html
<script>
    function foo(){
        var obj_a = {
            name: 'uncle-yang'
        };

        var obj_b = obj_a;

        obj_b.name = "大叔·杨";

        console.log(obj_a.name); // "大叔·杨"
        console.log(obj_b.name); // "大叔·杨"
    }
    foo();
</script>
```
这段代码运行时会经历以下的内存变化流程
1. js运行加载window对象: 创建出window内存
2. 定义全局foo函数，创建出foo内存
3. 执行foo函数
4. 定义变量 obj_a,并且指向在堆内存中的一块空间，空间里包含着`{name: 'uncle-yang'}`
5. 定义变量 obj_b, obj_b的指向和obj_a一样的内存空间
6. obj_b改变了堆空间中name的名称
7. 由于obj_a和obj_b指向的时同样一块堆内存空间，所以访问到的name都是修改后的值
8. foo()执行完毕，a内存销毁
9. 内存中只剩下window和foo,直到页面卸载时这两个内存空间才会被销毁

其中，Object的变量存储方式我们称为堆。我们可以直接存储无key-val键值对，然后通过key来获取对应的值。整个过程都是没有顺序的，不用像栈空间一样'排队'

基础类型以外的值(Object, Array, Function)，将通过堆空间的存储方式进行存储

#### 内存泄露 & 垃圾回收
* 对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。 不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）

* 在局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。但是全局变量什么时候需要自动释放内存空间则很难判断，因此在我们的开发中，需要尽量避免使用全局变量，以确保性能问题


#### 详情
* [MDN内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
