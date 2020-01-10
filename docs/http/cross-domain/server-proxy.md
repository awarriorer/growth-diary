# server-proxy

-------

server代理是实现跨域请求的一种后端实现手段，原理是在请求到本地服务的。

`http://dev.test.com/server-proxy.html`

``` html
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
					url: '/server-proxy-api/get-name',
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

`http://dev.example.com` node server.js

``` js
var express = require('express');
var app     = express();

var resData = {
	status: 1,
	data: 'Hi, this is uncle-yang.'
}

// 正常请求
app.get('/get-name', function(req, res){
	res.json(resData);
});

// start server
var server = app.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```

http://dev.test.com node server.js

``` js
var express = require('express');
var request = require('request');
var app     = express();

// 静态资源
app.use(express.static('public'));

// 代理
app.get('/server-proxy-api/*',function(req, res){
	
	/**
	 * 这里可以做一些认证的处理，从而完成一些认证
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

## 小结

* 本质
  * 请求在通过nginx的时候被转发到目标服务器
* 缺点
* 优点
  * 只需要后端进行简单配置，前端请求无差异,和日常ajax请求一样
* 适用场景
  * 若是要实现多个请求跨域，最好目标服务器的请求地址具有一定的规则，否则每个请求都需求在nginx做配置
