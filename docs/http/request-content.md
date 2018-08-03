### 一个请求中都包含了什么？
-------

### General (请求概览信息)

* Request URL
    * 说明: 请求地址
    * 默认值: 无
    * 数据类型: String

* Request Method
    * 说明: 请求类型
    * 默认值: 无
    * 可选参数: GET,POST,PUT,DELETE,HEAD,CONNECT,OPTIONS,TRACE,PATCH
    * 数据类型: String
    * 备注: GET=获取，POST=提价，PUT=更新，DELETE=删除，HEAD=请求资源头，CONNECT=链接，OPTIONS=获取资源支持的请求，TRACE=测试，PATCH=修改部分，详情参考[关于Api设计的一些见解](./api-architecture.md) 

* Status Code
    * 说明: 请求状态码
    * 默认值: 无
    * 数据类型: Number
    * 备注: [你和服务器的交往日常](./response-status-codes.md)

* Remote Address
    * 说明: 请求服务器的IP和端口
    * 默认值: 无
    * 数据类型: String

* Referrer Policy 
    * 说明: 监管访问来源信息，指定请求头中Refere应该被包含的字段
    * 默认值: no-referrer-when-downgrade
    * 数据类型: String
    * 可选参数: no-referrer,no-referrer-when-downgrade,origin,origin-when-cross-origin,same-origin,strict-origin,strict-origin-when-cross-origin,unsafe-url
    * 备注: 具体类型参考[Referrer-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)

### Request Headers(请求头)
* Accept (request)
    * 说明: 客户机支持的数据类型，使用 Content-Type 应答头通知客户端它的选择
    * 默认值: 无
    * 数据类型: String

* Accept-Encoding (request)
    * 说明: 客户机所支持的压缩格式，并在响应报文首部 Content-Encoding 中通知客户端该选择
    * 默认值: 无
    * 数据类型: String

* Accept-Language (request)
    * 说明: 客户机所支持的自然语言，并在响应报文首部 Content-Language 中通知客户端该选择
    * 默认值: 无
    * 数据类型: String
    * 可选参数: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5

* Authorization (Request)
    * 说明: 用于验证用户代理身份的凭证
    * 默认值: String
    * 数据类型: 无

* Connection (Response & Request)
    * 说明: 决定当前的事务完成后，是否会关闭网络连接
    * 默认值: 无
    * 数据类型: String
    * 可选参数: keep-alive(网络连接就是持久的，不会关闭，使得对同一个服务器的请求可以继续在该连接上完成),close

* Connection-Length (Response & Request)
    * 说明: 指明发送给接收方的消息主体的大小，用十进制数字表示的八位元组的数目
    * 默认值: 无
    * 数据类型: Number

* Content-Type (Response & Request)
    * 说明: 指示资源的MIME类型 media type,实际返回的内容的数据类型
    * 默认值: 无
    * 数据类型: String
    * 可选参数: text/html; charset=utf-8;,multipart/form-data;

* Cookie (Request)
    * 说明: 请求头中带的cookie,含有先前由服务器通过 Set-Cookie 首部投放并存储到客户端的 HTTP cookies
    * 默认值: String
    * 数据类型: 无
    * 备注: 如果请求中的cookie太大，可能引起服务器报400错误。

* Host (Request)
    * 说明: 请求的服务器域名
    * 默认值: String
    * 数据类型: 无

* Origin (Request)
    * 说明: 请求所在的域名，cors跨域时会用到
    * 默认值: String
    * 数据类型: 无

* Referer (Request)
    * 说明: 请求的页面来源
    * 默认值: String
    * 数据类型: 无
    
* User-Agent (Request)
    * 说明: 发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号
    * 默认值: String
    * 数据类型: 无

### Query String Parameters (查询参数)
* 请求地址中,?后面的参数键值对

### Request Payload (请求体)
* 请求体，通常在各种插件中的data,get请求没有该项

### Response headers(响应头)
* Allow (Response)
    * 说明: 枚举资源所支持的 HTTP 方法的集合
    * 默认值: 无
    * 数据类型: String

* Access-Control-Allow-参数，可用于cose检查 (Response)
    * Credentials
        * 说明: 否可以将对请求的响应暴露给页面
        * 默认值: false
        * 数据类型: Boolean
    * Headers
        * 说明: 用于 preflight request （预检请求）,允许的头部
        * 默认值: false
        * 数据类型: Boolean
    * Methods
        * 说明: 用于 preflight request （预检请求）,允许请求的类型
        * 默认值: 无
        * 数据类型: String
    * Origin
        * 说明: 用于 preflight request （预检请求）,允许请求的来源
        * 默认值: 无
        * 数据类型: String,或者通配符
    * Origin
        * 说明: 用于 preflight request （预检请求）,允许请求的来源
        * 默认值: 无
        * 数据类型: String,或者通配符

* Cache-control (Response)
    * 说明: 指定浏览器的缓存机制
    * 默认值: 无
    * 数据类型: String
    * 可选参数: `max-age=<seconds>, max-stale[=<seconds>], min-fresh=<seconds>, no-cache, no-store, no-transform, only-if-cached`,
    * 备注：[浏览器缓存策略](./browser-cache.md)

* Date (Response)
    * 说明: 消息生成的日期和时间
    * 默认值: 无
    * 数据类型: `<day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT`

* ETag (Response)
    * 说明: 资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web服务器不需要发送完整的响应。而如果内容发生了变化，使用ETag有助于防止资源的同时更新相互覆盖
    * 默认值: 无
    * 数据类型: W/"<etag_value>"

* Server (Response)
    * 说明: 处理请求的源头服务器所用到的软件相关信息
    * 默认值: 无
    * 数据类型: String

* set-cookie (Response)
    * 说明: 服务器端向客户端发送 cookie
    * 默认值: 无
    * 数据类型: `<cookie-name>=<cookie-value>; Expires=<date>`

* Vary (Response)
    * 说明: 一脸懵逼
    * 默认值: 无
    * 数据类型: String

* X-Powered-By (Response)
    * 说明: 服务框架，一般是框架自动追加的
    * 默认值: 无
    * 数据类型: String

### 小结
* 一问一答的"对话方式"，
* 请求头: 大爷(服务器):我是谁，从哪儿来，需要的数据压缩方式和数据格式
* 响应头: 小子(客户机):是否被允许，响应时间，你可以存一份，我要在你身上写点儿东西，我是啥服务
* 请求体: 大爷(服务器)请笑纳
* 响应体: 小子(客户机):这是你想要的，赶紧滚
