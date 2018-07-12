### 日常跨域解决方案之(CORS-upload)
-------

这个地方的实现和cors的实现是一样的，这个栗子只有html部分不一样

http://dev.test.com/cors-upload.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>cros-upload示例</title>
</head>
<body>
	<input type="file" id="but">

	<script type="text/javascript">

		window.onload = function(){
			console.log("window.onload");

			let but = document.querySelector("#but");

			but.onchange = function(e){
				let options = {
					methods: 'post',
					data:{
						image: e.target.files[0],
					},
					url: 'http://dev.example.com/upload-image',
				};

				request(options, function(percent){
					// 上传进度
		            console.log("api中的输出---已经上传" + percent);
				}, function(res){
					console.log('cors...响应');
					console.log(res.data);

					// 把照片渲染到body
					if(res.status){
						var image = new Image();
			            image.src = res.data;

			           document.body.appendChild(image)
					}

				})
			}
		}

		function request(options, process, next){
			var xhr = new XMLHttpRequest();
			var methods = options.methods.toLocaleUpperCase();

			// 异步传输
			xhr.open(methods, options.url, true);

			//创建form对象
			var formData = new FormData();

			let data = options.data || {};

			for(let key in data){
				formData.append(key, data[key]);
			}

			xhr.upload.onprogress = function (ev) {
		        var percent = 0; 

		        if(ev.lengthComputable) {
		            percent = 100 * ev.loaded / ev.total;
				}

				process && process(percent);
			}

			xhr.onreadystatechange = function() {
				if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
					let response = xhr.responseText;

					response = JSON.parse(response);

					// 请求结束后,在此处写处理代码
					next(response)
				}
			}
			//发送请求
			xhr.send(formData);
		}
	</script>
</body>
</html>
```

http://dev.example.com node server.js


``` js
var express    = require('express');
var fileUpload = require('express-fileupload');
var app        = express();

// file
app.use(fileUpload());
// 静态资源
app.use(express.static('upload-file'));

/**
 * 配置cors
 * 需要路由声明之前执行
 */  
app.all('*', function(req, res, next) {
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

// 正常请求
app.post('/upload-image', function(req, res){
	let data = {
		status: 0,
		mes: "没有获取到文件",
	}

	if(!req.files){
		res.json(data);

		return;
	}

	// 获取到上传的文件
	let image = req.files.image;

	// 把文件存到本地
	image.mv(`./upload-file/${image.name}`, function(){

		res.json({
			status: 1,
			data: `http://dev.example.com/${image.name}`,
		})

	});

});

// start server
var server = app.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})
```

### 小结

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
	* 任性的你不需要兼容低版本浏览器