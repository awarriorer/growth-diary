### flex布局
-------

在flex还未出现之前，我们常用的布局需要依赖`display,position,float`属性，甚至有些特殊的布局还要以来js来动态计算容器大小。直到2009年flex出现以后，我们大前端终于有了一种简单，完整，响应式的布局方式。

文章中的图片和部分内容来自阮一峰前辈的[Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)。

#### 基本概念
flex布局，也叫弹性布局，兼容现代浏览器，在移动端的表现更是堪称完美。当我们为一个元素设置`display:flex`属性后，那么该元素就是一个flex容器。它的所有子元素将成为flex容器中的flex项目。

如下图所示，容器默认存在两条轴线，水平主轴(main axis) 和垂直交叉轴(cross axis)。主轴开始的位置(与边框的交叉点)叫做`main start`，结束的位置叫做`main end`。垂直交叉轴的开始位置叫做`cross start`,结束位置叫做`cross end`。其中flex项目沿着主轴排列。单个flex项目占据的主轴空间叫做`main size`，占据交叉轴空间叫做`cross size`。 
![基本概念](./images/base-info.png)

#### 容器属性
* flex-direction, 主轴的方向
    * row: 水平方向，从左到右
    * row-reverse: 水平方向,从右向左
    * column: 垂直方向，从上到下
    * column-reverse: 垂直方向，从下到上
    ![direction](./images/direction.png)
* flex-wrap，主轴排列时，是否换行？
    ![wrap](./images/wrap.png)
    * nowrap: 不换行
    ![nowrap](./images/nowrap.png)
    * wrap: 换行，且第一行在上方
    ![wrap](./images/wrap.jpg)
    * wrap-reverse: 换行，且第一行在下方
    ![wrap-reverse](./images/wrap-reverse.jpg)
* flex-flow，是`flex-direction`和`flex-wrap`属性的简写形式
    * flex-flow: `<flex-direction>` || `<flex-wrap>`
* justift-content, 定义flex项目在主轴上的对齐方式
    * flex-start: 默认，左对齐
    * flex-end: 右对齐
    * center： 剧中
    * space-between: 两端对齐，flex项目之间间隔相等
    * space-around: 每个项目两侧的间隔相等，项目之间的间隔是项目与边框的两倍
    ![justift-content](./images/justift-content.png)
* align-items, 定义flex项目在交叉轴上如何对齐
    * flex-start: 交叉轴起点对齐
    * flex-end: 交叉轴终点对齐
    * center: 交叉轴的中点对齐
    * baseline: 项目的第一行文字的基线对齐
    * stretch: 默认值，如果flex项目未设置高度或者高度为auto，那么flex项目讲占满整个容器的高度 
    ![align-items](./images/align-items.png)
* align-content，定义多根轴线的对齐方式，如果改属性只有一根轴线，那么该属性没有作用
    * flex-start: 与交叉轴的起点对齐
    * flex-end: 与交叉轴的终点对齐
    * center: 与交叉轴的中点对齐
    * space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布
    * space-around: 每根轴线两侧的间隔相等，项目之间的间隔是项目与边框的两倍
    * stretch: 默认值，轴线沾满整个交叉轴
    ![align-content](./images/align-content.png)

#### flex项目的属性
* order: 定义flex项目在容器中的排列顺序，数值越小，排列越靠前，默认值为0
![order](./images/order.png)
* flex-grow: 定义flex项目的放大比例，默认值为0，如果存在剩余空间，也不放大
* flex-shrink: 定义flex项目缩小比例，默认值为1，如果空间不足，改项目将缩小
![flex-shrink](./images/flex-shrink.jpg)
* flex-basis: 定义靠在分配多余空间之前，flex项目占据主轴的空间，浏览器根据这个属性，计算主轴是否有多余的空间，
    * 默认值auto,
    * 如果设置成和width或者heigh一样的值，那么该flex项目讲占据固定空间
* flex: 是flex-grow,flex-shrink和flex-basis的简写
    * flex: none | `[ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
* align-self, 设置该项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
    * align-self: auto | flex-start | flex-end | center | baseline | stretch;
    * 除了auto，其他都与align-items属性完全一致。
![align-self](./images/align-self.png)
