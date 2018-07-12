### 日常跨域解决方案之(nginx-proxy)
-------

ngin代理是实现跨域请求的一种后端实现手段，原理相对来说也很容易理解。就是在请求通过nginx的时候，把请求转发给目标服务器。

http://dev.test.com/nginx-proxy.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>nginx-proxy示例</title>
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
					//注意，这里是在请求本域名的api接口，但是本域名下并没有这个接口
					url: '/nginx-proxy-api/get-name',
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

http://dev.example.com node server.js

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

nginx 配置
```
server {
	listen       80;
	server_name  dev.test.com;
	
	location / {
		proxy_pass http://127.0.0.1:5678/;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		client_max_body_size 50m;
		client_body_buffer_size 256k;
		proxy_connect_timeout 30;
		proxy_send_timeout 30;
		proxy_read_timeout 120;
		proxy_buffer_size 256k;
		proxy_buffers 4 256k;
		proxy_busy_buffers_size 256k;
	}

	location /nginx-proxy-api/ {
		# 不清楚为什么这里不能设置http://dev.example.com/，难道是不能指向本机？待证实
		proxy_pass http://127.0.0.1:3500/;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		client_max_body_size 50m;
		client_body_buffer_size 256k;
		proxy_connect_timeout 30;
		proxy_send_timeout 30;
		proxy_read_timeout 120;
		proxy_buffer_size 256k;
		proxy_buffers 4 256k;
		proxy_busy_buffers_size 256k;
	}
}

```

### 小结

* 本质
    * 请求在通过nginx的时候被转发到目标服务器
* 缺点
    * 
* 优点
	* 只需要后端进行简单配置，前端请求无差异,和日常ajax请求一样
* 适用场景
	* 若是要实现多个请求跨域，最好目标服务器的请求地址具有一定的规则，否则每个请求都需求在nginx做配置