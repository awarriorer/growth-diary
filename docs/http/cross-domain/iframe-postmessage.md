# iframe + postMessage

-------

原理：postMessage可以与任意域名之间通信(只要能通信了，其他的就都是浮云了),  
类似一个代理，A域名不能直接访问B域名的接口，于是B给A派了一个小弟(pageC.html页面)，然后跟A说，你可以通过快递小哥(postMessage)把你的请求告诉我小弟，然后我小弟会把你想要的结果快递给你~

http://dev.test.com/post-message.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>iframe-posMessage示例</title>
</head>
<body>
	<button id="but">执行请求</button>

	<iframe src="http://dev.example.com/iframe-postMessage" id="iframe" frameborder="0"></iframe>
	
	<script type="text/javascript">
		window.onload = () =>{
			let but = document.querySelector("#but");

			but.onclick = function(){
				let requestOptions = {
					methods: 'get',
					url: 'http://dev.example.com/get-name',
				}

				createRequest(requestOptions, function(res){
					console.log('响应...');
					console.log(res);
				})
			}
		}

		// 初始化请求个数
		window.requestIndex = 0;

		let iframe = window.frames[0];

		// 创建一个请求
		function createRequest(opt, next){
			// 请求次数自增，避免下次请求时回调执行絮乱
			requestIndex++;

			// 回调函数名称
			let funName = 'postMessageBack_' + requestIndex;

			// 把请求标识带过去
			opt.callback = funName;

			// 定义回调名称
			window[funName] = function(res){
				// 执行回调
				next(res);
			}

			let str = JSON.stringify(opt)

			iframe.postMessage(str, '*');
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

http://dev.example.com/iframe-postMessage.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>快递小哥</title>
</head>
<body>
	<script type="text/javascript">
		window.onload = () =>{

			window.addEventListener("message", function(event){
				let origin = event.origin;
				// 允许访问的白名单
				let whitelist = [
					'http://dev.test.com',
				];

				if(whitelist.indexOf(origin) == -1){
					console.log("不在白名单内~");
					return;
				}
				
				let requestOpstions = JSON.parse(event.data);

				// 发出请求
				request(requestOpstions, function(res){

					res.callback = requestOpstions.callback;

					let resJson = JSON.stringify(res);

					// 把数据广播出去
					window.parent.postMessage(resJson, origin);
				})

			}, false);

			// 常规请求
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

		}

	</script>

</body>
</html>
```

## 小结

* 本质
  * postMessage跨域通信
  * 把请求委托给目标域名的页面
* 缺点
  * ie8+才支持，而且ie8+<ie10只支持iframe的方式
* 优点
  * 支持各个类型的请求
* 适用场景
  * 任性不兼容低版本浏览器
  * 当前模式不支持上传文件，如需有上传文件的需求，请看[iframe-form-postMessage-upload](./iframe-form-postMessage-upload.md)
