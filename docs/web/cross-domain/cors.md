### 笨大叔·日常跨域解决方案之(CROS)

这是个相对较新，且比较省力的一个跨域方案。不会说话的我，直接用代码演示
CORS，跨域资源共享(Cross-origin resource sharing)

html
```
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

			but.onclick = function(){
				let options = {
					methods: 'get',
					url: 'http://dev.cros.com/get-name'
				};

				request(options, function(res){
					console.log('cors...响应');
					console.log(res.data);
				})
			}
		}

		function request(options, next){
			var xhr = new XMLHttpRequest(); 

			// 异步传输
			xhr.open(options.methods.toLocaleUpperCase(), options.url, true);

			//填充header
			if(options.headers){		
				for( var key in options.headers ){
					xhr.setRequestHeader(key,options.headers[key]);
				}
			}

			//发送请求
			xhr.send(options.data || null);

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
nodeJs

```
var express = require('express');
var app     = express();

var resData = {
	status: 1,
	data: 'Hi, this is uncle-yang.'
}

// set router
app.get('/', function(req, res){
	res.send('Hello World!');
});

// 配置jsonp
app.get('/jsonp', function(req, res){
	res.jsonp(resData);
});

// 配置cros
app.all('/get-name', function(req, res, next) {
	//来访的域名
	let origin   = req.headers.origin;
	// 允许访问的白名单
	let whitelist = [
		'http://dev.test.com',
		'http://dev.test2.com',
		'http://dev.test3.com',
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

app.get('/get-name', function(req, res){

	console.log("输出了...");

	res.json(resData);
});

// start server
var server = app.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```

原理：浏览器允许