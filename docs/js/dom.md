### Dom
-----------
Dom(Document Object Model——文档对象模型)将web页面和Js链接起来。从而可以使js对web页面上的节点元素操作。

关于Dom的增删改查
* [查询Dom](#查询dom)
* [创建Dom](#创建dom)
* [更改Dom](#更改dom)
* [删除Dom](#删除dom)

#### 查询Dom
es5中的方法
|查询方式| 方法名称| 返回值| 对应属性| 备注|
|:----|------|-----|----|----|
|id查询|getElementById('container')|单个匹配的元素|id属性|如果id重复，返回最后一个|
|class查询|getElementsByClassName('box')|多个匹配的元素|class属性||
|class查询|getElementsByName('con')|多个匹配的元素|names属性||
|class查询|getElementsByTagName('div')|多个匹配的元素|标签名称||

es6中的方法
|查询方式| 方法名称| 返回值| 对应属性| 备注|
|:----|------|-----|----|----|
|选择器查询|querySelector('div')|单个匹配的元素|选择器||
|选择器查询|querySelectorAll('div')|多个个匹配的元素|选择器||

##### 关系节点访问
|查询方式| 方法名称| 备注|
|:----|------|----|
|父节点|parentNode||
|子节点|children|只返回html节点|
|子节点|parentNode|返回节点，html，文本|
|第一个子节点|firstChild||
|最后一个子节点|lastChild||
|上个子节点|previousSibling|同层级|
|下个子节点|nextSibling|同层级|




##### 常用查询方法
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .con{
            width: 200px;
            height: 200px;
            margin-left: 50px;
            margin-top: 50px;
            overflow: hidden;
            position: relative;
            background-color: red;
        }
        .box{
            width: 100px;
            height: 100px;
            margin: 10px;
            padding: 20px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="con" id="con">
        <div 
            class="box" 
            id="box" 
            name="box" 
            style="background-color: yellow; font-size: 18px;border: 1px solid #ddd">
            <span>hello, uncle-yang!</span>
        </div>
    </div>
</body>
</html>
```
``` js
//获取元素
let dom = document.querySelector('#box');

/*
    访问节点的类型,返回值
    1: 元素节点
    2: 属性节点
    3: 文本节点
*/ 
console.log(dom.nodeType);

//获取标签中的文本内容
console.log(dom.innerText); // 'hello,uncle-yang!'
console.log(dom.innerHTML); // '<span>hello, uncle-yang!</span>'

//查看dom都设置了哪些属性
console.log(dom.getAttributeNames()); // ["class", "id", "name", "style"]
//查看dom上的属性
console.log(dom.getAttribute('name')); // 'box'
console.log(dom.getAttribute('id')); // 'box'

/*
    获取style样式，
    注意，
        1:如果有链接符('-'),那么采用驼峰命名规则访问
        2:这里仅仅是标签中定义的style中的样式，不包括class名称对应的css中的样式
*/
console.log(dom.style); //所有样式，
console.log(dom.style.border); // "1px solid rgb(221, 221, 221)"
console.log(dom.style.backgroundColor); // "yellow"

/*
    获取最终的样式
    是css和style最终的表现结果
*/
console.log(getStyle(dom, 'border')); //1px solid rgb(221, 221, 221)
console.log(getStyle(dom, 'backgroundColor')) // rgb(255, 255, 0),黄色，最终的结果
console.log(getStyle(dom, 'width')) // 100px
/*
    window.getComputedStyle()方法返回一个对象
    该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值
*/
function getStyle(obj, attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}


/*
    获取元素的宽高,clientWidth,clientHeight
    注意：只包括宽高(width、height)，内边距(padding)
*/
console.log(dom.clientWidth, dom.clientHeight); // 140,140

/*
    获取元素的宽高,offsetWidth,offsetHeight
    注意：只包括元素宽高(width、height)，内边距(padding)和边框(border)
*/
console.log(dom.offsetWidth, dom.offsetHeight); // 142,142

/*
    获取元素的宽高,scrollWidth,scrollHeight
    注意：只包括元素宽高(width、height)，内边距(padding)和溢出宽高
    不益处的情况下，和clientWidth一样
*/
console.log(dom.scrollWidth, dom.scrollHeight); //140,140

/*
    返回元素的左、上外缘距离最近采用定位父元素内壁的距离，
    如果父元素中没有采用定位的，则是获取上外边缘距离文档内壁的距离。
    定位的有效值position:relative | absolute | fixed
*/

console.log(dom.offsetLeft, dom.offsetTop); //10,10。如果.con没有positon属性，那么其值为60，60

///获取或者设置对象元素被滚动条向左、下拉动的距离。
console.log(dom.scrollLeft, dom.scrollTop); //0,0。如果.con没有positon属性，那么其值为60，60
```

#### 创建Dom
``` js
//创建个html元素
var div = document.createElement('div');
//设置dom属性
div.setAttribute('data-name', 'uncle-yang');

// 如果是创建图片，可以这样
var img = new Image(100, 200); // 等同于 document.createElement('img');
img.src = 'imgUrl'; //<img width="100" height="200" src="imgUrl">

//创建文本节点
var text = document.createTextNode('hello uncle-yang!');

// 把创建出的元素加入节点中
div.appendChild(img); //把图片追加到div中
div.insertBefore(text, img); //把文字追加到图片前

document.body.appendChild(div);
```

#### 更改Dom
这里说的更改，只能更改dom的内容，属性，样式,

``` js
let dom = document.querySelector('#box');

// 设置属性
dom.setAttribute('name', 'firstBox');

//设置样式
dom.style.width = '200px';
dom.style.backgroundColor = '#000';

//改变其文本内容
dom.innerText = '你好！'; // 这种情况，会把dom中的span也抹掉
dom.querySelector('span').innerText = '你好！'; //
//改变器内部代码
dom.innerHTML = '<i>你好，大叔！</i>'; // 
```

#### 删除Dom
``` js
// 删除当前节点
document.getElementById('box').remove();
// 删除子节点
document.body.removeChild(document.getElementById('con'));
```