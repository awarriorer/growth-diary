# Bom

----------
Bom(浏览器对象模型),与浏览器窗口交互时用到的对象。其主要组成部分为

* [Window: 当前窗口](#window)
* [Location: 地址栏对象](#location)
* [History: 历史对象](#history)
* [Screen: 屏幕对象](#screen)
* [Navigator: 代理信息](#navigator)

## window

``` js
// 浏览器视口(viewport)的宽高
console.log(window.innerWidth);
console.log(window.innerHeight);

// 整个浏览器窗口的宽高
console.log(window.outerWidth);
console.log(window.outerHeight);

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

## Location

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
## History

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
 * url: 路由地址，调用 pushState() 后浏览器并不会立即加载这个URL，
    但可能会在稍后某些情况下加载这个URL，比如在用户重新打开* 浏览器时。
    新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前URL处理。
    新URL必须与当前URL同源，否则 * * pushState() 会抛出一个异常。
    该参数是可选的，缺省为当前URL。
 * 
 * 执行完成以后，浏览器的地址栏会变成刚刚执行的url,但是页面并没有重新访问服务器然后刷新浏览器
 */
history.pushState(stateObject, title, url);

//修改历史中的记录
history.replaceState();

//监听url变化之----哈希值
window.addEventListener('hashchange', function(){
    console.log('# 哈希值变化了！');
});

//监听url变化之---pushState
/*
    调用history.pushState()或者history.replaceState()不会触发popstate事件.
    popstate事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮
    (或者在JavaScript中调用history.back()、history.forward()、history.go()方法).
    当网页加载时,各浏览器对popstate事件是否触发有不同的表现,Chrome 和 Safari会触发popstate事件, 而Firefox不会.
*/
window.addEventListener('popstate', function(e){
    console.log(e);
}, false);
```

## Screen

``` js
//屏幕 & 浏览器位置信息
console.log(window.screen);

//浏览器操作系统桌面左边界的水平、顶部垂直距离
console.log(window.screenX  || window.screenLeft);
console.log(window.screenY  || window.screenTop);

```
## Navigator

获取浏览器信息，用户代理的状态和标识
``` js
let navigator = window.navigator;
//总的信息
console.log(navigator);

//浏览器名称
console.log(navigator.appName);
//浏览器内部开发名称
console.log(navigator.appCodeName);
//浏览器版本
console.log(navigator.appVersion);

//用户的首先语言
console.log(navigator.language);
//返回一个表示用户已知语言的DOMString数组，并按优先顺序排列。
console.log(navigator.languages);


//浏览器平台名
console.log(navigator.platform);
//当前浏览器的用户代理, 请求头中的user-agent数据来源
console.log(navigator.userAgent);


//是否联网
console.log(navigator.onLine);
//监听网络状态
widnow.addEventListener('offline', function(e){
    console.log('offline');
});
widnow.addEventListener('online', function(e){
    console.log('online');
});

//获取浏览器位置
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
});
//监控位置改变
var watchID = navigator.geolocation.watchPosition(function(position) {
    console.log(position);
});

```
