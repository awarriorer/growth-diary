### 关于居中显示
在写css的，不免的会有把一个容器的位置居中的需求，我们大体上可以分为以下几类，[点击查看效果](https://codepen.io/awarriorer/pen/vvoNgB)


#### 已知容器宽高
* a 计算根据偏移量计算中间位置
    * 先偏移父节点容器的50%，
    * 往回拉本节点的50%
``` css
.center-con{
    width: 200px;
    height: 200px;
    position: absolute;
    margin-left:50%;
    margin-top:50%;
    left: -100px;
    top: -100px;
}

.center-con{
    width: 200px;
    height: 200px;
    position: absolute;
    margin-left:50%; // 或者:left: 50%
    margin-top:50%; // 或者:top: 50%
    transform: translate(-50%,-50%);
}
```

* b 很奇怪?第一次见一样很奇怪
    * margin: auto; 浏览器会自动选择一个合适的margin来应用。它可以用于将一个块居中
    * position: absolute; 脱离文档流
    * left: 0;top: 0;right: 0;bottom: 0;当前块元素将填充父元素(设置了position值)的所有可用空间
    * 设置了width: 200px; height: 200px;防止当前容器占据父元素所有的可用空间，使浏览器根据新的边框重新计算margin:auto;
    * 由于脱离了文档流，浏览器会给margin-top，margin-bottom相同的值，所以居中了
``` css
.center-con{
    width: 200px;
    height: 200px;
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

```

#### 未知容器宽高
* a 根据特性，计算偏移量，这个方法在已知宽度和未知宽度都适用
    * margin-left,left的值是百分比的时候，基准是父节点容器的大小
    * transform中translate的值为百分比的时候，其基准是本节点
``` css
.center-con{
    position: absolute;
    margin-left:50%; // 或者:left: 50%
    margin-top:50%; // 或者:top: 50%
    transform: translate(-50%,-50%);
}
```
* b flexBox特性

``` css
.parent-con{
    width: 500px;
    height: 500px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-con{
    background-color: red;
}

```

