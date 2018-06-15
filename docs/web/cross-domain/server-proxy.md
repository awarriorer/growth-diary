### 日常跨域解决方案之(server-proxy)

原理：把跨域的请求直接通过server代理到目标服务器

`http://dev.test.com`下的`server-proxy.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>server-proxy示例</title>
</head>
<body>
	<button id="but">执行请求</button>

	<script type="text/javascript">

		window.onload = function(){
			console.log("window.onload");

			let but = document.querySelector("#but");

			but.onclick = function(e){
				let options = {
					methods: 'get',
					//这里是在请求本域名的api接口
					url: '/api-v2.0/get-name',
				};

				request(options, function(res){
					console.log('nginx...响应');
					console.log(res.data);
				})
			}
		}

		function request(options, next){
			var xhr = new XMLHttpRequest(); 
			var methods = options.methods.toLocaleUpperCase();
			// 异步传输
			xhr.open(methods, options.url, true);

			//发送请求
			xhr.send(null);

			xhr.onreadystatechange = function() {//Call a function when the state changes.
				if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
					let response = xhr.responseText;

					response = JSON.parse(response);

					// 请求结束后,在此处写处理代码
					next(response)
				}
			}
		}

	</script>
</body>
</html>
```
test-server.js
```
var express = require('express');
var request = require('request');
var app     = express();

// 静态资源
app.use(express.static('public'));

// 代理
app.get('/api-v2.0/*',function(req, res){
	
	/**
	 * 这里可以做一些认证的处理，从而从而完成一些认证
	 */

	//若是http://dev.example.com检查了请求来源，可以把来源设置成和目标一样的地址
	req.headers["referer"] = "http://dev.example.com";

	// 要请求的目标地址
	var url = 'http://dev.example.com' + req.url;

	// 和前端约定好的路径规则，删除标识，恢复真实请求路径
	url = url.replace('/api-v2.0', '');

	// 开始请求
	var proxy = request[req.method.toLowerCase()](url);
	
	// 响应到页面
	req.pipe(proxy).pipe(res);

});

// start server
var server = app.listen(5678, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
``` 

#### 小结

* 本质
    * 把请求通过后端server代理到目标服务器
* 缺点
    * 
* 优点
    * 服务端配置，兼容性良好
* 适用场景
	* 适用于一切网络请求代理，包括静态资源以及Api请求