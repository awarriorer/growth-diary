# 常见请求状态码

-------

## 100波段，你可以继续请求

* 100 信息型状态响应码表示目前为止一切正常, 客户端应该继续请求

## 200波段，你和服务器的应答状态

* 200 表明请求已经成功. 默认情况下状态码为200的响应可以被缓存
* 201 代表应答成功
* 202 服务器端已经收到请求消息，但是尚未进行处理
* 203 请求已经成功被响应，但是获得的负载与源头服务器的状态码为 200 (OK)的响应相比，经过了拥有转换功能的 proxy （代理服务器）的修改。
* 205 用来通知客户端重置文档视图，比如清空表单内容、重置 canvas 状态或者刷新用户界面

## 300波段，重定向，服务器把你甩了，但给你找了换个下家

* 301 永久重定向，请求的资源已经被移动到了由 Location 头部指定的url上，是固定的不会再改变。搜索引擎会根据该响应修正
* 302 重定向，请求的资源被暂时的移动到了由Location 头部指定的 URL 上

## 400波段，原则上拒绝你！服务器不喜欢你，你要的服务器没有，你太大了服务器受不了，服务器不想理你，你次数太多了服务器受不了

* 400 Bad Request 响应状态码表示由于语法无效，服务器无法理解该请求。 客户端不应该在未经修改的情况下重复此请求
* 401 Unauthorized 代表客户端错误，指的是由于缺乏目标资源要求的身份验证凭证，发送的请求未得到满足。
* 403 Forbidden 代表客户端错误，指的是服务器端有能力处理该请求，但是拒绝授权访问。
* 404 Not Found 代表客户端错误，指的是服务器端无法找到所请求的资源
* 405 Method Not Allowed 表明服务器禁止了使用当前 HTTP 方法的请求。需要注意的是，GET 与 HEAD 两个方法不得被禁止
* 406 Not Acceptable 状态码表示客户端错误，指代服务器端无法提供与  Accept-Charset 以及 Accept-Language 消息头指定的值相匹配的响应

* 408 服务器已经决定将连接关闭，而不是继续等待
* 413 Payload Too Large 表示请求主体的大小超过了服务器规定的限度，服务器可以选择关闭连接或者返回  Retry-After 首部字段
* 414 URI Too Long 表示客户端所请求的 URI 超过了服务器允许的范围
* 429 Too Many Requests 表示在一定的时间内用户发送了太多的请求，即超出了“频次限制”

## 500波段，服务器要炸了，代理服务有bug了，后台逻辑有bug删库跑路了

* 500 Internal Server Error 是表示服务器端错误的响应状态码，意味着所请求的服务器遇到意外的情况并阻止其执行请求
* 502 Bad Gateway 表示扮演网关或代理角色的服务器，从上游服务器中接收到的响应是无效的
* 503 Service Unavailable 服务器尚未处于可以接受请求的状态
* 504 Gateway Timeout 超时，扮演网关或者代理的服务器无法在规定的时间内获得想要的响应
* 505 HTTP Version Not Supported 服务器不支持请求所使用的 HTTP 版本