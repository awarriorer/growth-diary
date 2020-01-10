### 常用样式写法
------

* 布局
  * [清除浮动](#清除浮动)
  * [设置滚动条样式](#设置滚动条样式)
* 文本
  * [单行文本省略号](#单行文本省略号)
  * [多行文本省略号](#多行文本省略号)
  * [文字强制换行](#文字强制换行)
  * [文字两端对齐](#文字两端对齐)
  * [设置placeholder颜色](#设置placeholder颜色)
* 常用函数
  * [百分比](#百分比)

#### 清除浮动

``` scss
@mixin clear {
  width: 0;
  height: 0;
  display: block;
  overflow: hidden;
  clear: both;
}

@mixin afterClear {
  &:after{
    content: "";
    @include clear;
  }
}

```

#### 设置滚动条样式

``` scss
@mixin setScrollStyle($width:4px, $bgColor:rgba(255,255,255,0), $scorllColor:#ddd, $right:0px) {
  //轨道
  &::-webkit-scrollbar {
    width:$width;
    height: $width;
    right: $right;
    background-color: $bgColor;
  }
  //滑块
  &::-webkit-scrollbar-thumb {
    background-color: $scorllColor;
    border-radius: 100px;
  }
}
```

-------

#### 单行文本省略号

``` scss
@mixin oneLine {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@mixin removeOneLine {
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
}
```

#### 多行文本省略号

``` scss
@mixin moreLine($x:1) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $x;
  -webkit-box-orient: vertical;
}
```

#### 文字强制换行

``` scss
// 文字强制换行（尤其适用于中文英文数字混合的时候）
@mixin wordBreak() {
  word-wrap: break-word;
  word-break: break-all;
}

```

#### 文字两端对齐

``` scss
@mixin justify {
  text-align: justify;

  &:after{
    display: inline-block; 
    padding-left: 100%;
    content: '';
  }
}
```

#### 设置placeholder颜色

``` scss
@mixin setPlaceholderColor($color:#ccc) {
  &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: $color;
  }
  &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: $color;
  }
  &::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: $color;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: $color;
  }
}
```

------

#### 百分比

``` scss
@function getPercent($num) {
  @return 100 / $num * 1%;
}
```
