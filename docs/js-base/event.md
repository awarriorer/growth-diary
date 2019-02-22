### Event
----------


``` js
//获取鼠标相对
document.addEventListener('click', function(e){
    var e = e || event;
    
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