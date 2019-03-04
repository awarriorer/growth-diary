### Ajax
在js中，和服务器通信主要通过XMLHttpRequest(XHR)实现。

#### 常用的方法和属性
``` js 
let xhr = new XMLHttpRequest();

/**
 * 初始化请求 open(method, url, async, user, password)
 * method: 请求类型
 * url: 请求地址
 * async: 可选，是否是异步请求，默认为true
 * user: 可选，用户名认证
 * password: 认证密码
 */
xhr.open('GET', '/api/demo');

//设置为同步还是异步

//设置请求最大时长,单位毫秒
xhr.timeout = 5000;

//设置header,必须在open和send之间调用
xhr.setdRequestHeader('user', 'user_id');
xhr.setdRequestHeader('access_token', 'token');

/**
 * 设置响应的数据格式 
 * 默认值: '', 效果和text一样
 * 可选值: text, json, arraybuffer(二进制数据js对象ArrayBuffer), blob(二进制数据的Blob对象), document,
 */ 
xhr.responseType = 'json';

/**
 * send(options) 发送请求,接受一个可选参数
 * options可选参数类型
 *      String: 可以把对象数组，转化成json后，再传入send
 *      FormData: 表单对象
 *      ArrayBuffer: 二进制数据js对象ArrayBuffer
 *      blob: 二进制数据的Blob对象
 */
let form = new FormData();

/**
 * 给form添加参数 
 * form.append(name, value, fileName);
 * name: 键的名称,对应input的name值
 * value: 键对应的值
 * fileName: 如果value是file类型的话，可传入file的name
 */
form.append('name', 'uncle-yang');
form.append('age', 23);
form.append('avatar', file, '帅帅的大叔.jpg');

// 发送
xhr.send(form);

//中止请求
xhr.abort();

//请求发送后:

// 当请求状态改变时执行
xhr.onreadyStatechange = function(){
    /**
     * 请求代理所处的状态 
     * 返回值：
     *      0: 代理被创建，但是还未调用open()方法
     *      1: open()方法已经调用
     *      2: send()方法已经调用
     *      3: 下载中，responseText已经包含部分数据
     */
    var readyState = xhr.readyState;
    var status = xhr.status;//http请求的状态码

    //如果HTTP 响应已经完全接收。并且 由服务器返回的 HTTP 状态代码，如 200 表示成功
    if(readyState == 4){
        var responseType = xhr.response; // 请求数据的类型
        var response = xhr.responseText;//目前为止为服务器接收到的响应体

        if(status == 200){
            //上传成功
            console.log('success', response);
        }else{
            console.log('error', response);
        }
    }
}

/**
 * 如果是上传文件,可以用uplod属性
 * funName可选值
 *      onloadstart: 开始获取
 *      onprogress: 数据传输进行中
 *      onabort: 获取操作中止
 *      onerror: 获取失败
 *      onload: 获取成功
 *      ontimeout: 超时
 *      onloadend: 获取完成,无论成功与否
 */
xhr.upload['onprogress'] = function(ev){
    var percent = 0; 

    if(ev.lengthComputable) { 
        percent = 100 * ev.loaded/ev.total; 

        console.log("上传进度: ", percent + '%');
    }
}

```