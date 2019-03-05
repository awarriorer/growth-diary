### 闭包
----------
一个老生常谈的话题，再简单的捋捋！

#### 一个函数内部的函数
``` js
function f1(){
    var n = 1;
    
    function f2(){
        alert(1); 
    }

    return f2;
}

var result = f1();

result(); // 1
```
* 外部函数并不能直接访问`f1`的内部变量`n`,但是可以通过其内部暴露的方法访问
* 一种访问函数内部变量的手段

#### 在函数外部对函数内部的局部变量进行操作
``` js

function f1(){
    var n = 1;

    function add(){
        n++;
    }

    function f2(){
        console.log(n);
    }

    return {
        get: f2,
        add: add
    };
}

var res = f1(); 

res.get(); // n = 1
res.add(); // add
res.get(); // n = 2

var res_b = f1();

res_b.get(); // n = 1
res_b.add(); 
res_b.get(); // n = 2
```

其中：`result = f1() = {f2, add}`,所以`result`的最终指向是包含`f2`的对象,但是`f2`内部用到了其父函数`f1`的变量`n`;这就导致`f1`始终在内存中没有释放。所以当执行`add`时`n++`,这时`n = 2`;
