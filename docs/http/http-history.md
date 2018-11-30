### HTTP简要成长史

任何事物都有一个成长的过程，包括最近在研究的HTTP。HTTP协议发展到现在，已经是HTTP/2的版本。从 HTTP/1.0到HTTP/2,这个协议都经历了什么，我们今天一起回顾一下HTTP这个家伙的发家史。

#### HTTP/0.9-单行协议(1989)
对，你没有看错，HTTP还有一个0.9的版本，这个版本是1989被创建出来的。且早期的HTTP是没有版本概念，所以截止到HTTP1.0之前的版本，统称为0.9版本。

关于这个版本，还有一个名称，单行协议。他在9岁的时候，他只能完成get请求，且只能请求html文件，他不能看图片，听音乐以及看视频。且他的请求，没有状态码，浏览器蜀黍对他做了什么，我们外人根本不知道！协议、服务器、端口号这些都不是必须的！

``` html
GET /helloWord.html
```
``` html
<HTML>
    Hello Word
</HTML>
```

#### HTTP/1.0 - 构建可扩展性(1991,狭义，非官方标准)
岁月如梭，转眼间倒了1.0版本，这个时候，他能做的，依旧只支持get请求，但是这个时候，
* 他会在请求后添加一个HTTP版本信息(HTTP/1.0)
* 他会在在请求上添加一个状态码，让我们知道请求是成功还是失败
* 引入HTTP头的概念，无论是请求还是响应，允许传输元数据，这让协议非常灵活，更具有拓展性
* 在HTTP头的帮助下，具备传输纯文本HTML文件以外的的其他类型文档的灯里。

栗子：
``` html
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML> 
一个包含图片的页面
  <IMG SRC="/myimage.gif">
</HTML>
```
接下来请求图片
``` html
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(这里是图片内容)
```

#### HTTP/1.1 - 标准化协议(1997)
这是HTTP的第一个标准化版本，HTTP/1.1 消除了大量歧义内容并引入了多项改进

* 连接可以复用，节省了多次打开TCP连接加载网页文档资源的时间。
* 增加流水线操作，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。
* 支持响应分块。
* 引入额外的缓存控制机制。
* 引入内容协商机制，包括语言，编码，类型等，并允许客户端和服务器之间约定以最合适的内容进行交换。
* 感谢Host头，能够使不同域名配置在同一个IP地址的服务器上。

一个典型的请求流程， 所有请求都通过一个连接实现，看起来就像这样：
``` html
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)


GET /static/img/header-background.png HTTP/1.1
Host: developer.cdn.mozilla.net
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
```

#### HTTP/1.1 - 15年的拓展(1997-2014)

* HTTP用户安全传输(1994,HTTPS):HTTP在基本的TCP/IP协议栈上发送信息，网景公司（Netscape Communication）在此基础上创建了一个额外的加密传输层：SSL；SSL在标准化道路上最终成为TLS,随着版本1.0, 1.1, 1.2的出现成功地关闭漏洞。TLS 1.3 目前正在形成
* HTTP 用于复杂应用:REST模式(看Url就知道要什么,看http method就知道干什么,看http status code就知道结果如何)。方便前后端分离，在服务器面前，众生(web,android,ios,等等等)平等。


#### HTTP2/ - 为了更优异的表现(2015)

HTTP/2在HTTP/1.1有几处基本的不同:

* HTTP/2是二进制协议而不是文本协议。不再可读，也不可无障碍的手动创建，改善的优化技术现在可被实施。
* 这是一个复用协议。并行的请求能在同一个链接中处理，移除了HTTP/1.x中顺序和阻塞的约束。
* 压缩了headers。因为headers在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。
* 其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送的机制来提前请求(websocket)。