### 日常跨域解决方案之(iframe-form-postMessage-upload)

原理：

http://dev.test.com/iframe-form-postMessage-upload.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>iframe-form-postMessage-upload示例</title>
</head>
<body>
	<div id="butParent">
		<input type="file" name="image" id="but">
	</div>

	<script type="text/javascript">

		window.onload = function(){
			console.log("window.onload");

			let but = document.querySelector("#but");

			but.onchange = function(e){
				let options = {
					methods: 'post',
					data:{},
					url: 'http://dev.example.com/iframe-form-postMessage-upload',
					fileDom: this,
					fileParentDom: document.querySelector("#butParent")
				};

				request(options, function(res){
					console.log('cors...响应');
					console.log(res.data);

					// 把照片渲染到body
					if(res.status){
						let image = new Image();
			            image.src = res.data;

			            document.body.appendChild(image)
					}

				})
			}
		}

		// 初始化请求个数
		window.requestIndex = 0;

		function request(options, next){
			// 请求次数自增，避免下次请求时回调执行絮乱
			requestIndex++;

			let targetName = 'upload_' + requestIndex;

			options.url += `?callback=${targetName}`

			//form表单对象
			let FormData  = null;
			// 提交
			let submitBut = null;
			//ifrmae
			let Iframe    = null;

			createForm();

			//创建form对象
			function createForm(){
				//创建form对象
				FormData = document.createElement("form");
				/*
					设置form提交地址
					如果存在iframeUrl,那么将会读取iframeUrl，否则，用原地址
				*/
				FormData.action = options.url;

				//提交类型
				FormData.method = "POST";

				//设置规定在发送表单数据之前如何对其进行编码。
				FormData.enctype = options.enctype || "multipart/form-data"

				//设置targe
				FormData.target = targetName;

				// 文件对象,
				if(options.fileDom){
					FormData.appendChild(options.fileDom);
				}

				//填充数据
				let optionsData = options.data || {};

				for(let key in optionsData){
					let itemInput = document.createElement("input");
					
					itemInput.type  = "hidden";
					itemInput.name  = key;
					itemInput.value = optionsData[key];

					FormData.appendChild(itemInput);
				}

				//提交
				submitBut = document.createElement("input");

				submitBut.type  = "submit";
				submitBut.value = "开始上传";

				FormData.appendChild(submitBut);

				//开始创建iframe
				createIframe();
			}

			//创建iframe
			function createIframe(){
				//创建iframe
				Iframe = document.createElement("iframe");
				//设置目标
				Iframe.name = targetName;

				//开始追加元素
				appendCild();
			}

			//添加元素
			function appendCild(){
				let div = document.createElement("div");

				div.id  = targetName;
				
				div.appendChild(FormData);
				div.appendChild(Iframe);

				//把iframe追加到body
				document.body.appendChild(div);

				// 定义回调名称
				window[targetName] = function(res){
					// 删除已经当前执行过的script
					removeDom(targetName);
					// 执行回调
					next(res);
				}

				//开始提交
				submitBut.click();
			}

			//删除form和iframe
			function removeDom(id){
				let div = document.querySelector(`#${id}`);

				// 先把input file放回到原位置
				if(options.fileDom && options.fileParentDom){
					options.fileParentDom.appendChild(options.fileDom);
				}

				if(div){
					document.body.removeChild(div);	
				}
			}
		}

		window.addEventListener("message", function(event){
			let data = {};

			if(event.data){
				data = JSON.parse(event.data);
			}

			let callbackName = data.callback;

			if(callbackName){
				delete data.callback;
			}

			// 执行回调
			typeof window[callbackName] === 'function' && window[callbackName](data);

		}, false);

	</script>
</body>
</html>
```

http://dev.example.com/ node server.js

``` js
var express    = require('express');
var fileUpload = require('express-fileupload');
var app        = express();
// view
app.set('views', __dirname + '/view');//模板目录
app.set('view engine', 'ejs'); //模板语法设置成ejs
app.engine('ejs', require('ejs').__express);//

// file
app.use(fileUpload());
// 静态资源
app.use(express.static('upload-file'));

// 正常上传文件
app.post('/iframe-form-postMessage-upload', function(req, res){
	let callbackName = req.query.callback || 'none';
	let data = {
		status: 0,
		mes: "没有获取到文件",
		callback: callbackName,
	}

	if(!req.files){
		res.render('upload-post-message', {
			data: JSON.stringify(data)
		})

		return;
	}

	// 获取到上传的文件
	let image = req.files.image;

	// 把文件存到本地
	image.mv(`./upload-file/${image.name}`, function(){

		data = {
			status: 1,
			data: `http://dev.example.com/${image.name}`,
			callback: callbackName,
		};

		res.render('upload-post-message', {
			data: JSON.stringify(data)
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

http://dev.example.com upload-post-message.ejs

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>upload-post-message</title>

	<script type="text/javascript">
		let renderData = '<%- data%>';
	</script>
</head>
<body>
	<script type="text/javascript">
		window.onload = () =>{
			// 把数据广播出去
			window.parent.postMessage(renderData, '*');
		}

	</script>

</body>
</html>
```


#### 小结

* 本质
    * from的action=iframe的name,iframe没有跨域限制 
    * 服务器接受到请求后，通过一个页面以postMessage的方式作为请求的相应
    * 这里只是用了postMessage作为消息载体，更换载体实现也能实现相同的需求
* 缺点
    * 前后端都需要做适配，约定回调函数字段名
    * 上传文件，拿不到上传进度
* 优点
    * 
* 适用场景
	* 任性不兼容低版本浏览器