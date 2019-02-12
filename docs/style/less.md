### Less常用语法
-------

less是css的预编译工具，帮助我们更好的编写维护css，其文件后缀名为less。

#### 导入(Importing)
``` less
@import 'library' //等同于@import 'library.less
@import 'base.css'
```

#### 注释
``` less
/*
 * 块注释
 */

// 行注视
```
#### 变量(Variables) & 运算(OPerations)

``` less
@width: 10px;
@baseSize: 200px;
@height: @baseSize + 10px;
@left: @baseSize + @width - 2px;
@top: @width * 2;
@marginLeft: @baseSize + @width / 2;
@marginTop: (@baseSize + @width) / 2;

#header {
    width: @width;
    height: @height;
    positioin: absolut;
    left: @left;
    top: @top;
    margin-left: @marginLeft;
    margin-top: @marginTop;
}
```
编译为
``` css
#header {
    width: 10px;
    height: 210px;
    positioin: absolut;
    left: 208px;
    top: 20px;
    margin-left: 205px;
    margin-top: 105px;
}
```
#### 嵌套(Nesting)
``` less
#header {
    color: black;

    &:after{
        content: " ";
        display: block;
        font-size: 0;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .navigation {
        font-size: 12px;
    }
    .logo {
        width: 300px;
    }
}
```
编译为
``` css
#header {
    color: black;
}
#header:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
}
#header .navigation {
    font-size: 12px;
}
#header .logo {
    width: 300px;
}

```

#### 混合(Mixins)
``` less
//普通 class
.class-a{
    background-color: #fff;
}
// 定义为混淆,不会被编译成css
.my-other-mixin(@left:100px) {
    height: 100px;
    margin-left: @left;
}

.class-b{
    width: 100px;
    // 混入一个class
    .class-a();
    // 混入一个定义的混淆class
    .my-other-mixin(120px);
}
```
编译为
``` css
.class-a {
    background-color: #fff;
}
.class-b {
    width: 100px;
    background-color: #fff;
    height: 100px;
    margin-left: 120px;
}

```

#### Maps
``` less
@size: {
    width: 10px;
    height: 10px;
}

.con{
    width: @size[width];
    height: @size[height];
}
```

编译为
``` css
.con {
    width: 10px;
    height: 10px;
}

```

#### 函数(Functions)
在Less中，函数可以分为内置函数和自定义函数，其中内置函数可以参考[Less内置函数](https://less.bootcss.com/functions/)，而自定义函数，需要借助[less-plugin-functions](https://github.com/seven-phases-max/less-plugin-functions)

#### 更详细的语法
更详细的语法可以参考[lesscss](http://lesscss.cn/)
