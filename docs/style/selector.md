### 选择器和优先级
-------
首先，选择器可分为
* ID选择器
* 类选择器
* 属性选择器
* 伪类选择器
* 伪元素选择器
* 标签选择器
* 通配符选择器
* 后代选择器
* 交集选择器
* 并集选择器

#### ID选择器
```css
#app {
    width: 100%;
    height: 100%;
}
```

#### 类选择器
``` css
.app {
    width: 100%;
    height: 100%;
}
```

#### 属性选择器
``` css
input[type="text"] {
    color: #000;
}
```

#### 伪类选择器
``` css
a:link {
    color: #000;
}

a:hover {
    color: yellow;
}
```

#### 伪元素选择器
``` css
.app: before{
    content: 'before';
}

.app: after{
    content: 'after';
}
```

#### 标签选择器
选择器是某个`HTML`元素，比如 `p、h1、em、a`
``` css
html {
    font-size: 14px;
}

h1 {
    font-size: 32px;
}
```

#### 通配符选择器
```css
* {
    font-size: 14px;
}
```

#### 后代选择器
``` css
/* 子节点，第一层级 */
.ul > li {
    list-style: none;
}
/* .ul下的所有p，不论层级 */
.ul p {
    font-size: 12px;
}
```

#### 交集选择器
当在`div`元素上写`class="app"`该属性才生效
``` css
div.app {
    font-size: 14px;
}
```

#### 并集选择器
``` css
p, h1, .one, #app {
    color: red;
}
```


#### 序选择器
``` css
ul li:first-child {
    margin-top: 0;
}

ul li:last-child {
    margin-top: 10px;
}

ul li:nth-child(2) {
    margin-top: 10px;
}

ul li:nth-child(3n) {
    margin-top: 10px;
}
```

#### 优先级
* 最近的祖先样式比其他祖先样式优先级高。
* 选择器优先级：ID选择器 > 类选择器 > 属性选择器 > 伪类选择器 > 伪元素选择器 > 标签选择器 > 通配选择器
* 内联样式 > ID选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
* 计算选择符中 ID 选择器的个数`a`，计算选择符中类选择器、属性选择器以及伪类选择器的个数之和`b`，计算选择符中标签选择器和伪元素选择器的个数之和`c`。按 `a、b、c`的顺序依次比较大小，大的则优先级高，相等则比较下一个。若最后两个的选择符中`a、b、c`都相等，则按照"就近原则"来判断。