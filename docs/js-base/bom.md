### Bom
----------
Bom(浏览器对象模型),与浏览器窗口交互时用到的对象。其主要组成部分为
* [Window: 当前窗口](#window)
* Location: 地址栏对象
* History: 历史对象
* Screen: 屏幕对象
* Navigator: 


#### window
``` js
// 浏览器视口(viewport)的宽高
console.log(window.innerWidth); 
console.log(window.innerHeight);

// 整个浏览器窗口的宽高
console.log(window.outerWidth); 
console.log(window.outerHeight);

//屏幕 & 浏览器位置信息
console.log(window.screen);

//浏览器操作系统桌面左边界的水平、顶部垂直距离
console.log(window.screenX  || window.screenLeft);
console.log(window.screenY  || window.screenTop);

//窗口大小改变时触发
window.onresize = function(){
    console.log('窗口大小');
}

//文档在水平、垂直方向已滚动的像素值
console.log(window.scrollX);
console.log(window.scrollY);

//滚动到文档中的某个坐标
window.scroll(x, y);
window.scrollTo(x, y);

```

#### Location
``` js
var location = window.Location;

//协议
console.log(location.protocol);
//域名
console.log(location.host);
//端口
console.log(location.prot);
//完整的地址
console.log(location.href);
//path
console.log(location.pathname);
//查询参数
console.log(location.search);
//哈希值
console.log(location.hash);

//访问来源
console.log(document.referrer);

// 跳转到目标url
location.assign(url);
//重定向，替换当前资源，被替换的页面不会保存在会话历史中(无法通过后退到达)，
location.reload(url);
//刷新当前页面,forceReload = true,强制刷新拒绝使用缓存，false,可能会使用缓存
location.reload(forceReload);
```
#### History
``` js
var history = window.history;

//当前会话中的页面个数
console.log(history.length);


//返回上一页 = 浏览器左上角的返回按钮模,x默认等于-1，如果需要返回两页，那么x=-1，
history.back(x);
//前进一页 = 浏览器右上角的下一页按钮，x默认等于1
history.forward(x);

//通过当前页面的相对位置从浏览器历史记录( 会话记录 )加载页面。比如：参数为-1的时候为上一页，参数为1的时候为下一页
history.go(x);

/**
 * 添加史记录中的条目
 * stateObject: 状态对象。
 * title: 标题
 * url: 路由地址，调用 pushState() 后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL，比如在用户重新打开浏览器时。新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前URL处理。新URL必须与当前URL同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前URL。
 */
history.pushState(stateObject, title, url);

//修改历史中的记录
history.replaceState();


```

#### Screen
#### Navigator
