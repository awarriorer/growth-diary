### 日常跨域解决方案之(CROS)

这是个相对较新，且比较省力的一个跨域方案。不会说话的我，直接用代码演示
CORS，跨域资源共享(Cross-origin resource sharing)

http://dev.test.com/cors.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>cros示例</title>
</head>
<body>
	<button id="but">执行jsonp请求</button>
	
	<script type="text/javascript">

		window.onload = function(){
			console.log("window.onload");

			let but = document.querySelector("#but");

			but.onclick = function(e){
				let options = {
					methods: 'get',
					url: 'http://dev.example.com/get-name',
				};

				request(options, function(res){
					console.log('cors...响应');
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

http://dev.example.com node server.js


``` js
var express = require('express');
var app     = express();

var resData = {
	status: 1,
	data: 'Hi, this is uncle-yang.'
}

// 配置cros
app.all('/get-name', function(req, res, next) {
	//来访的域名
	let origin   = req.headers.origin;
	// 允许访问的白名单
	let whitelist = [
		'http://dev.test.com',
	];

	// 判断是否在名单内
	if(whitelist.indexOf(origin) > -1){
		res.header('Access-Control-Allow-Origin', origin);  
	    res.header('Access-Control-Allow-Headers', 'X-Requested-With');  
	    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');  
	    res.header('Content-Type', 'application/json;charset=utf-8');  		    
	}
	// 隐藏当前用的那种框架
	res.header('X-Powered-By','none')  

	next();
});

// start server
var server = app.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```

#### 小结

* 本质
    * 同源策略是浏览器的，并不是服务器的，服务器只要收到请求，就会响应
	* 跨域请求时，浏览器会自动在header中，加上origin='当前域名'
    * 如果服务器设置了同意当前域名访问的许可，才可以被访问
* 缺点
    * 需要浏览器支持，且兼容不是十分好，需要IE10+
* 优点
    * 支持各种请求，包括上传
	* 只需要后端进行简单配置，前端请求无差异,和日常ajax请求一样
* 适用场景
	* 任性不兼容低版本浏览器
	* 只是上传文件，请看[CORS-upload](./cors-upload.md)