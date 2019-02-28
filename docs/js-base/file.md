### File & FileReader
-------
文件信息以及读取文件内容

#### File
File接口，用户获取文件信息。File对象的来之用户在input元素上选择文件，拖放生成的DataTransfer对象。File 对象是特殊类型的 Blob，且可以用在任意的 Blob 类型的 context 中。比如说， FileReader, URL.createObjectURL(), createImageBitmap(), 及 XMLHttpRequest.send() 都能处理 Blob 和 File。

``` html
<input type="file" id="file">
```

``` js
let dom = document.querySelector('#file');

dom.addEventListener('change', function(e){
    let ev = e || window.event;
    let files = ev.target.files; //取出所有文件

    //文件的数量
    console.log(files.length);

    let file  = files[0]; // 第一个文件

    // 文件名称
    console.log(file.name);
    // 文件大小
    console.log(file.size);
    // 文件类型
    console.log(file.type);
    //最后修改时间，毫秒数
    console.log(file.lastModified);
    //最后修改时间，返回一个Date对象 file.lastModifiedDate.getTime() == file.lastModified；
    console.log(file.lastModifiedDate);

    //图片预览 ---- 方法1,测试有兼容问题
    if(file.type.indexOf('image') !== -1){
        let img = new Image();
        let url = URL.createObjectURL(file); // 

        img.src = url;

        img.onload = function(){
            URL.revokeObjectURL(url);

            document.body.appendChild(this);
        }
    }

    //图片预览，那么可以本地预览 ---- 方法2，暂无发现有兼容问题
    if(file.type.indexOf('image') !== -1){
        var reader = new FileReader();//创建FileReader对象

        reader.onload = function(e) {
            var img = new Image();
            
            img.src = e.target.result;

            document.body.appendChild(img);
        }
        reader.readAsDataURL(file)
    }

    //音频预览
    if(file.type.indexOf('audio') !== -1){
        var reader = new FileReader();//创建FileReader对象

        reader.onload = function(e) {
            var audio = document.createElement('audio');
            
            audio.src = e.target.result;

            audio.play();

            document.body.appendChild(audio);
        }
        reader.readAsDataURL(file)
    }

    //视频预览
    if(file.type.indexOf('video') !== -1){
        var reader = new FileReader();//创建FileReader对象

        reader.onload = function(e) {
            var video = document.createElement('video');
            
            video.src = e.target.result;

            video.play();

            document.body.appendChild(video);
        }
        reader.readAsDataURL(file)
    }

}, false);
```


#### FileReader
FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
``` html
<input type="file" id="file">
```

``` js
let dom = document.querySelector('#file');

dom.addEventListener('change', function(e){
    let ev = e || window.event;
    let file = ev.target.files[0]; //取出所有文件

    // 创建实例
    let reader = new FileReader();

    //读取监听事件
    reader.onloadstart = function(){
        console.log('刚刚开始读取');
    }

    reader.onprogress = function(){
        console.log('读取中');
    }

    reader.onabort = function(){
        console.log('取操作被中断时触发');
    }

    reader.onloadend = function(){
        console.log('读取结束');
    }

    reader.onerror = function(){
        console.log('文件读取错误');
    }

    reader.onload = function(e){
        console.log('取操作完成时触发');

        console.log(3)
    }

    //启动方法
    //启动读取,返回一个ArrayBuffer
    reader.readAsArrayBuffer(file);

    //启动读取,返回一个base64编码的URL
    reader.readAsDataURL(file);

    //启动读取,返回一个字符串
    reader.readAsText(file);

    //中断读取
    reader.abort();
}
```