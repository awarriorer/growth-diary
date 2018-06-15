### 日常跨域解决方案之(nginx-proxy)

原理：把跨域的请求直接通过nginx代理到目标服务器

`http://dev.test.com`下的`nginx.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>nginx示例</title>
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
					url: '/api/get-name',
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
dev-test-server.js
```
var express    = require('express');
var app        = express();

// 静态资源
app.use(express.static('public'));

// start server
var server = app.listen(5678, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```
nginx配置文件
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

        location /api/ {
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

#### 小结

* 本质
    * 把请求通过nginx代理到目标服务器
* 缺点
    * 
* 优点
    * 服务端配置，兼容性良好
	* 本域服务层不需要再把api进行包装，减少维护成本
* 适用场景
	* nginx适用于一切网络请求代理，包括静态资源以及Api请求
	* 不适用目标做了防盗链，或者认证处理的代理