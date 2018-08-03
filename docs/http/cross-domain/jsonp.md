### 日常跨域解决方案之(jsonp)
-------

原理：静态资源(css,image,js)不受浏览器同源策略束缚
本着能动手就别吵吵的原则，直接做代码演示

http://dev.test.com/jsonp.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jsonp示例</title>
</head>
<body>
	<button id="but">执行jsonp请求</button>
	
	<script type="text/javascript">
		window.onload = () =>{
			let but = document.querySelector("#but");

			but.onclick = function(){
				createJsonp('http://dev.example.com/jsonp', function(res){
					console.log('jsonp响应...');
					console.log(res.data);
				})
			}
		}

		// 初始化请求个数
		window.requestIndex = 0;

		// 创建一个jsonp请求
		function createJsonp(url, next){

			// 请求次数自增，避免下次请求时回调执行絮乱
			requestIndex++;

			let funName = 'jsonpBack' + requestIndex;
			let reqUrl  = url + '?callback=' + funName;

			// 定义回调名称
			window[funName] = function(res){
				// 执行回调
				next(res);
				// 删除已经当前执行过的script
				removeScript(funName);
			}

			// 创建标签
			createScript(reqUrl, funName);

			// 创建script标签
			function createScript(requestUrl, id){
				let script = document.createElement('script');

				script.type = 'text/javascript';
				script.src  = requestUrl;
				script.id   = id;

				// 追加元素
				document.head.appendChild(script);
			}

			// 删除script 标签
			function removeScript(id){
				let script = document.querySelector('#' + id);

				document.head.removeChild(script);
			}

		}
	</script>
</body>
</html>
```
http://dev.example.com node server.js
``` js
var express = require('express');
var app     = express();

var resData = {
	status: 1,
	data: 'Hi, this is uncle-yang.'
}

app.get('/jsonp', function(req, res){
	res.jsonp(resData);
});

// start server
var server = app.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```

### jsonp 这个请求返回了什么？
``` js
/**/ 
typeof jsonpBack1 === 'function' && jsonpBack1({
	status: 1, 
	data: "Hi, this is uncle-yang."
});
```
检查查询参数callback的回调函数名称是否是一个函数，如果是函数，那么执行，且把数据传到jsonpBack1中

::: warning
注意:一般jsonp的请求库的默认回调函数命名是`callBack=callBack_${index}`，且index的值是在实例内部进行累计。所以如果一个项目中的用到了多个jsonp的实例，可能会造成callBack执行错乱。所以可以对 clallBack=${baseName} 进行设置，从而使多个jsonp的实例共存。
:::

#### 小结

* 本质
    * 动态创建script标签，请求地址就是其src,服务器会返回一个js文件，里面执行了传递了结果的callback回调函数
    * jsonp 只是一种 "使用模式",请求手段
* 缺点
    * 因为是本质是script，所以只支持get请求，所以请求大小受限制
* 优点
    * 兼容性良好
* 适用场景和使用心得
	* 虽然只支持get请求，但是我们的可以通过参数表明请求类型，然后在Api网关层再做一次识别，从而达到其他类型请求的目的
	* 无法上传文件