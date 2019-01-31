### Sass 常用语法
sass有两种后缀名文件：一种后缀名为sass，不使用大括号和分号；另一种就是我们这里使用的scss文件，这种和我们平时写的css文件格式差不多，使用大括号和分号；日常开发，我们通常用scss作为后缀；

#### 导入(importing)
``` scss
@import 'library' //等同于@import 'library.scss
@import 'base.css'
```
::: tip
* `css`的`@import`是执行到`@import`后才会去加载对应的`css`文件
* `scss`中的 `@import`是将引入的`scss`文件与本文件合并后再生成一个`css`文件
:::

#### 注释
和lese一样
``` scss
/*
 * 块注释
 */

// 行注视
```
#### 变量(Variables) & 运算(OPerations)
``` scss
$name: 'key';
$width: 10px;
$baseSize: 200px;
$height: $baseSize + 10px;
$left: $baseSize + $width - 2px;
$top: $width * 2;
$marginLeft: $baseSize + $width / 2;
$marginTop: ($baseSize + $width) / 2;

// 字符串拼接
#header-#{$name} {
    width: $width;
    height: $height;
    positioin: absolut;
    left: $left;
    top: $top;
    margin-left: $marginLeft;
    margin-top: $marginTop;
}
```
编译为
``` css
#header-key {
    width: 10px;
    height: 210px;
    positioin: absolut;
    left: 208px;
    top: 20px;
    margin-left: 205px;
    margin-top: 105px;
}
```
::: tip
* `scss`中的 `@import`是将引入的`scss`文件与本文件合并后再生成一个`css`文件
:::
#### 嵌套(Nesting)
``` scss
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
``` scss
// 样式
@mixin large-text {
    font: {
        family: Arial;
        size: 20px;
        weight: bold;
    }
    color: #ff0000;
}

// 默认值
@mixin abs($left: 5px, $top: 30px){
    position: absolute;
    left: $left;
    top: $top;
}

.con-default{
    width: 100px;
}

.con{
    height: 100px;
    // 继承样式
    @extend con-default;
    // 混入默认样式
    @include large-text;
    // 混入
    @include abs(20px);
}
```
编译为
``` css
.con-default, .con {
  width: 100px;
}

.con {
  height: 100px;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
  position: absolute;
  left: 20px;
  top: 30px;
}
```

#### 列表(Lists) & 循环
``` scss
// 一维数组
$list-def: 12px, 15px, 16px;
// 二维数组
$list-obj: (white, #fff), (black, #000);

@for $i from 1 through length($list-def) {
    .item-#{$i}{
        wdith: nth($list-def, $i)
    }
}

@each $color-name, $val in $list-obj {
    .color-#{$color-name} {
        color: $val;
    }
}

```
编译为
``` css
.item-1 {
    wdith: 12px;
}

.item-2 {
    wdith: 15px;
}

.item-3 {
    wdith: 16px;
}

.color-white {
    color: #fff;
}

.color-black {
    color: #000;
}
```

#### Map
``` scss
// 对象
$map-demo: (h1: 2em, h2: 1.5em, h3: 1.2em);
// 数组对象
$array-map: (name: whild, val: #fff), (name: black, val: #000);

@each $header, $size in $map-demo {
    #{$header} {
        font-size: $size;
    }
}

@for $i from 1 through length($array-map) {
    $item: nth($array-map, $i);

    .color-#{map-get($item, name)}{
        color: map-get($item, val)
    }
}


```
编译为
``` scss 
h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

h3 {
    font-size: 1.2em;
}

.color-whild {
    color: #fff;
}

.color-black {
    color: #000;
}
```

#### 函数(Functions)
和less一样，函数分为[内置函数](http://sass-lang.com/documentation/Sass/Script/Functions.html)和自定义函数。内置函数可[点击这里](http://sass-lang.com/documentation/Sass/Script/Functions.html);

自定义函数
``` scss
@function get-percentage($val){
    return (100 / $val) * 100%;
}

.con {
    width: get-percentage(2);
}

```
编译为
``` css
.con {
    width: 50%;
}
```