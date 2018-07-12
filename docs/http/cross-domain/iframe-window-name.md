### 日常跨域解决方案之(iframe-window.name)
-------

原理：

http://dev.test.com/iframe-window.name.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>iframe-window.name示例</title>
</head>
<body>
	<button id="but">执行请求</button>
	
	<script type="text/javascript">
		window.onload = () =>{
			let but = document.querySelector("#but");

			but.onclick = function(){
				createRequest('http://dev.example.com/iframe-window-name/getName', function(res){
					console.log('响应...');
					console.log(res.data);
				})
			}
		}

		// 初始化请求个数
		window.requestIndex = 0;

		// 创建一个jsonp请求
		function createRequest(url, next){
			let Iframe = null;
			let resultStatus = 0;
			// 请求次数自增，避免下次请求时回调执行絮乱
			requestIndex++;

			let funName = 'requestBack' + requestIndex;
			let reqUrl  = url + '?callback=' + funName;

			// 定义回调名称
			window[funName] = function(res){
				// 删除已经当前执行过的script
				removeDom(funName);
				// 执行回调
				next(res);
			}

			// 创建标签
			createIframe(reqUrl, funName);

			// 创建script标签
			function createIframe(requestUrl, id){
				Iframe = document.createElement('iframe');

				Iframe.src  = requestUrl;
				Iframe.id   = id;

				Iframe.onload = function(){
					if (resultStatus === 1) {
						// 读取数据
						var data = Iframe.contentWindow.name;

						data = JSON.parse(data);

						let callbackName = data.callback;

						if(callbackName){
							delete data.callback;
						}

						// 执行回调
						typeof window[callbackName] === 'function' && window[callbackName](data);

					}else if (resultStatus === 0) {
						resultStatus = 1;
						// 设置的代理文件
						Iframe.contentWindow.location = "./iframe-window.name-proxy.html";    
					}
				}

				// 追加元素
				document.body.appendChild(Iframe);
			}

			// 删除script 标签
			function removeDom(id){
				let dom = document.querySelector('#' + id);

				document.body.removeChild(dom);
			}

		}
	</script>
</body>
</html>
```
http://dev.example.com node server.js
``` js
var express    = require('express');
var app        = express();

// view
app.set('views', __dirname + '/view');//模板目录
app.set('view engine', 'ejs'); //模板语法设置成ejs
app.engine('ejs', require('ejs').__express);

var resData = {
	status: 1,
	data: 'Hi, this is uncle-yang.'
}

// 通过iframe+postMessage的请求
app.get('/iframe-window-name/getName', function(req, res){
	let callbackName = req.query.callback || 'none';

	resData.callback = callbackName;

	res.render('iframe-window-name', {
		data: JSON.stringify(resData),
	});
});

// start server
var server = app.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```
http://dev.example.com iframe-window-name.ejs

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>iframe-window-name</title>

	<script type="text/javascript">
		let renderData = '<%- data%>'
	</script>
</head>
<body>
	<script type="text/javascript">
		window.name = renderData;
	</script>

</body>
</html>
```

### 小结

* 本质
    * 动态创建iframe标签，请求地址就是其src,服务器会返回一个html文件，html中把window.name的值设置成请求结果，然后，再把iframe的src改成本域下的一个空页面，从而可以拿到window.name的值，也就是请求结果
* 缺点
    * 只支持get请求
    * 会插入删除dom，可能会有性能问题
* 优点
    * 兼容性良好
* 适用场景和使用心得
	* 虽然只支持get请求，但是我们的可以通过参数表明请求类型，然后在Api网关层再做一次识别，从而达到其他类型请求的目的
	* 无法上传文件