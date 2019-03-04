### 严格模式
----------
相对于严格模式，非严格模式时怎么产生的？由于浏览器发展初期，各个厂商浏览器都是相当的嚣张和不服！我要搞我自己的标准！我的浏览器我说了算！于是可是苦了前端这些个搬砖娃！

#### 目的
* 消除js不合理，不严谨，减少怪异行为。抛出错误来消除了一些原有静默错误
* 让代码更安全的执行
* 提高编译效率，增加运行速度
* 为新版本做铺垫

#### 作用域
针对整个文件，需要放在第一行！
``` html
<script>
    "use strict";
    console.log('这是严格模式');
</script>

<script>
    console.log('这是正常模式，宽松模式');
</script>
```
针对单个函数
``` js
function strict(){
    "use strict";
    console.log('这是严格模式');
}

function notStrict() {
    console.log('这是正常模式，宽松模式')
}
```
脚本文件的变通写法，也是文件打包时用到的写法
``` js
(function(){
    "use strict";
    // code
})()
```

#### 约束哪些行为，下面这些行为将报错
* 变量声明
``` js
"use strict";

v = 1; // 报错，未声明

for(i = 0; i < 2; i++){ //报错，变量未声明

}

function sum(a, a, c){ // !!! 语法错误
  return a + a + c; // 代码运行到这里会出错
}
```

* 对象操作，
``` js
"use strict";

// 给不可写属性赋值
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // 抛出TypeError错误

// 给只读属性赋值
var obj2 = { get x() { return 17; } };
obj2.x = 5; // 抛出TypeError错误

// 给不可扩展对象的新属性赋值
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // 抛出TypeError错误

var o = { p: 1, p: 2 }; //语法错误

//不允许这么牛逼人存在！
delete Object.prototype; // 抛出TypeError错误
```

* 严禁八进制
``` js
"use strict";
var sum = 015 + // !!! 语法错误
          197 +
          142;
```

* 禁止设置基本类型值的属性
``` js
(function() {
    "use strict";

    false.true = "";              //TypeError
    (14).sailing = "home";        //TypeError
    "with".you = "far away";      //TypeError
})();
```

* even在严格模式下执行，其中执行的内容也将被严格模式约束
``` js
function strict1(str){
    "use strict";
    return eval(str); // str中的代码在严格模式下运行
}
function strict2(f, str){
    "use strict";
    // 没有直接调用eval(...): 当且仅当str中的代码开启了严格模式时才会在严格模式下运行
    return f(str);
}
function nonstrict(str){
    return eval(str); // 当且仅当str中的代码开启了"use strict"，str中的代码才会在严格模式下运行
}

var x;
delete x; // !!! 语法错误

eval("var y; delete y;"); // !!! 语法错误
```
* 函数操作
``` js

```