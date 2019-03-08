### 模块机制
AMD,CMD,UMD,CommonJs,Es6 Modules? 啥啥啥？都是啥？傻傻分不清楚！

#### CommonJs

* 优点：
    * 同步步加载，模块加载会阻塞接下来代码的执行，需要等到模块加载完成才能继续执行
    * 就近依赖，用的时候再加载
    * 避免环境被变量污染的可能
* 缺点：
    * 不可以在浏览器端运行
* 特点：
    * 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存
* 运行环境：Node
``` js
// 导出模块 a.js
exports.name = 'uncle-yang';

// 导出模块 b.js
var sex = 'man';

module.exports = {
    sex: sex
}

// 定义模块c
var b = require('./b.js');
var name = '大叔·杨';

if(b.sex !== 'man'){
    // 将不再加载a.js
    var a = require('./a.js');

    name = a.name;
}

module.export = {
    name: name
}
```

#### AMD
AMD(Asynchronous Module Definition),这种规范是异步的加载模块，先定义所有依赖，然后在加载完成后的回调函数中执行;其特点是

* 优点：
    * 异步前置加载依赖(模块执行时，依赖已经加载完成)
    * 可以并行加载多个文件
* 缺点
    * 提高开发成本
    * 不能按需加载，必须提前加载所有依赖(前置加载)
* 运行环境：浏览器
* 实现库：
    * [requireJs](http://www.requirejs.cn/)

写法例子：
``` js
//定义模块 a.js
define({
    name: 'uncle-yang'
});

//定义模块 b.js
define(function(){
    // 可以用return对外暴露
    return {
        sex: 'max'
    }
})

// 定义模块 c.js, 依赖a和b
defined(['a.js', 'b.js'], function(a, b){
    return {
        name: a.name,
        sex: b.sex,
        age: 30
    }
});
```

#### CMD
CMD (Common Module Definition)，就近依赖

* 优点：
    * 异步加载
    * 就近依赖，用的时候再加载
* 缺点
    * 依赖spm打包，模块的加载逻辑偏重
* 运行环境：浏览器
* 实现库：
    * [esa.js](https://seajs.github.io/seajs/docs/#intro)

``` js
//定义模块 a.js
define(function(require, exports, module){
    exports.name = 'uncle-yang'
});

//定义模块 b.js
define(function(require, exports, module){
    module.exports = {
        sex: 'max'
    }

    //或者用return对外暴露
    return {
        sex: 'max'
    }
});

define(function(require, exports, module) {
    var a = require('a'),
        b = require('b');

    module.exports = {
        name: a.name,
        sex: b.sex,
        age: 30
    }
});
```

::: tip
requireJS是异步加载模块，SeaJS是同步加载模块?这么理解实际上是不准确的，其实加载模块都是异步的。只不过AMD依赖前置，js可以方便知道依赖模块是谁，立即加载。而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块
:::

#### UMD
UMD是创造了一种同时使用AMD和CommonJS两种规范的方法,常见写法

``` js
(function (root, factory) {
    var moduleName = 'un';

    if(typeof exports === 'object' && typeof module === 'object'){
        // commonJs
		module.exports = factory();
    }else if(typeof define === 'function' && (define.amd || define.cmd)){
        // amd & cmd
		define([], factory);
    }else{
        // 传统模式，挂载到全局
		root[moduleName] = factory();
    }
})(this, function() {
    return return {
        name: 'uncle-yang'
    }
})
```

#### Es6 module
es6自带规范

* 优点：
    * 终于有原生支持的语法了
* 特点
    * 导入导出必须在代码顶层
    * 只能导出对象，不能导出一个值
* 运行环境：浏览器；但是由于浏览器兼容问题，所以只能通过babel将不被支持的import编译为require
写法：
``` js
// 分开导出：a.js
export var name = 'uncle-yang';

// 分开导出：b.js
var sex = 'man';

export {
    sex: sex
}

// 引入和导出，c.js
import a from 'a.js';
import {sex as uncleSex} from 'b.js';

/**
 * 默认导出 
 * export default命令用于指定模块的默认输出，只支持值导出，
 * 但是只能指定一个，本质上它就是输出一个叫做default的变量或方法
 */
export default {
    name: a.name,
    sex: uncleSex,
    age: 30
}
```
