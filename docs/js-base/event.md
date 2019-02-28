### Event
----------
事件是js交互中重要的一环，比如鼠标的点击、移动，键盘点击，输入框的焦点、屏幕的大小变化，都会触发一系列事件，今天来缕缕常用的js事件。

#### 常用事件类型
* 鼠标事件
    * mouseenter: 有鼠标进入
    * mouseover: 鼠标经过元素
    * mousemove: 移动
    * mousedown: 按下
    * mouseup: 抬起
    * click: 点击
    * dblclick: 双击
    * whell | DOMMouseScroll: 滚轮任意方向
    * contextmenu: 点击了右键，菜单选项
    * mouseleave: 移除元素外
    * mouseout: 鼠标离开元素，或者移到其他子元素上
    * select: 文本被选中

* 触摸
    * touchstart: 开始触摸
    * touchenter: 触摸进入
    * touchmove: 移动
    * touchleave: 离开
    * touchend: 结束
    * touchcancel: 触摸被中止 
* 拖放事件
    * dragstart: 开始拖动
    * drag: 正在拖动(350ms触发一次)
    * dragend: 拖放结束
    * dragenter: 被拖拽的元素进入有效释放区
    * dragover: 被拖拽的元素正在有效释放区被拖动
    * dragleave: 被拖动的元素移除有效区
    * drop: 元素在有效去释放
    
* 键盘事件
    * keydown: 按下
    * keypress: 按下不放手，会被多次触发
    * keyup: 抬起
* 焦点(不冒泡)
    * focus: 获取
    * blur: 失去
    * select: 选中
    * change: 值改变
* 表单事件
    * submit: 提交
    * reset: 重置
* 视图事件
    * fullscreenchange: 全屏
    * fullscreenerror: 全屏异常
    * scroll: 滚动滚动条
    * resize: 窗口大小改变

* 资源事件
    * error: 资源加载失败
    * load: 页面加载，包括远程资源
    * abort: 因为用户问题停止下载
    * beforeUnload: 页面卸载之前执行
    * unload: 页面卸载
* document事件
    * DOMContentLoaded: Dom加载完成,不包括远程资源
    * readystatechange: Dom元素的加载状态，返回readyStates属性
        * uninitialized: 对象存在但尚未初始化
        * loading: 正在加载
        * loaded: 加载数据完成
        * interactive: 可以操作对象了，但还没有完全加载
        * complete: 对象加载完毕
    * error: 错误事件，js执行失败，image等远程资源加载失败时执行

* websocket事件
    * open: 链接已经建立
    * message: 收到一条消息
    * error: 链接异常
    * close: 链接关闭
* css 动画事件
    * animationstart: 某个css动画开始
    * animationend: 某个css动画结束
    * animationiteration: 某个css动画重新开始触发

[更多事件](https://developer.mozilla.org/zh-CN/docs/Web/Events)

<!-- [错误捕获](https://segmentfault.com/a/1190000014672384) -->
#### 关于事件属性
``` js
//获取鼠标相对
document.addEventListener('click', function(e){
    var e = e || event;

    //事件源,如果用户事件委托，那么这个属性将成为判断的主要依据
    console.log(e.target);

    // 事件类型
    console.log(e.type);

    // 事件发生的时间,毫秒级别
    console.log(e.timeStamp);

    //事件是由谁触发的？是用户(true)还是脚本(false)
    console.log(e.isTrusted);
    
    /**
     * 当前事件是否冒泡,向dom上层冒泡，返回一个boolean
     * 如果为ture: 那么可以调用e.stopPropagation()来阻止事件继续冒泡
     * 如果为false，
     */
    console.log(e.bubbles);

    /**
     * 事件是否可以被取消默认行为，返回一个boolean
     * 如果返回true:那么可以调用e.preventDefault()，来阻止默认事件发生
     * 如果为false,调用e.preventDefault()将会报错
     */
    console.log(e.cancelable);

    //事件发生的位置
    // 获取鼠标在浏览器有效区域的位置，不包括浏览器经滚动的距离
    console.log(e.clientX, e.clientY); 
    //获取鼠标相对于浏览器页面中的位置, 包括浏览器已经滚动的距离
    console.log(e.pageX, e.pageY);
    //获取鼠标相对于整个显示器的位置，无论当前浏览器大小是
    console.log(e.screenX, e.screenY); 
    //获取鼠标在当前事件源(e.target)的位置
    console.log(e.offsetX, e.offsetY); 
}, false);
```

#### 事件绑定&移除
``` js
var CLICK_EVENT_NAME = null;

//事件绑定
document.addEventListener('click', CLICK_EVENT_NAME = function(){
    console.log('点击');
}, false);

//解除绑定
document.removeEventListener('click', CLICK_EVENT_NAME);
```

#### 自定义事件
``` js
// 事件注册
function addEvent(sNode, sEventType, oFunc){
    var oElement = sNode;
    
    if(oElement == null){
        return false
    }
    
    sEventType = sEventType || "click";
    
    if((typeof oFunc).toLowerCase() !== "function"){
        return false;
    }
    
    if(oElement.attachEvent){
        oElement.attachEvent("on" + sEventType, oFunc);
    } else {
        if(oElement.addEventListener){
            oElement.addEventListener(sEventType, oFunc, false)
        } else {
            oElement["on"+sEventType] = oFunc;
        }
    }
    
    return true;
}

//事件触发
function fireEvent(element, type){
    var event; 

    if (document.createEvent) {
        event = document.createEvent("HTMLEvents");
        event.initEvent(type, true, true);
    } else {
        event = document.createEventObject();
        event.eventType = type;
    }

    event.eventName = type;

    if (document.createEvent) {
        element.dispatchEvent(event);
    } else {
        element.fireEvent("on" + event.eventType, event);
    } 
}

// 测试
addEvent(document, 'ready', function(){
    console.log('ready is happen');
});

//主动触发
fireEvent(document, 'ready');

```

#### 滑轮

``` js
//为内容区域添加滑轮滚动事件
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll', MouseScr, false);
}
document.onmousewheel = MouseScr;

function MouseScr(e){
    var e = e || window.event, TopY = 0;

    if(e.detail){
        bBtn = e.detail > 0  ? true : false;
    }else{
        bBtn = e.wheelDelta < 0 ? true : false;
    }
    if(bBtn){  
        console.log('下')
    }
    else{
        console.log('上')
    }
}
```

#### 监听Dom变化
* [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
* [Mutation Observer API](http://javascript.ruanyifeng.com/dom/mutationobserver.html)