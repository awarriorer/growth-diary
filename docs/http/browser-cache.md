# 浏览器缓存

-------

## 一个缓存的小场景？

你想去电影院看一场电影，于是你买了一张电影票(这是一个请求)，在电影票的有效事件内(缓存没有失效)，你带着票去电影院就能看到想看的电影，即使你在电影中因为内急出来上了个厕所，再进去，也是不需要重新买票的。但是错过了这个时间(缓存已经失效)，你就需要重新买票(请求))再观看。

## 缓存的方式

* 需要服务器验证
* 不需要服务器验证

## ETag 304

ETag是HTTP/1.1A的一种办法，由Web服务器生成，并写入响应头中。这个值用来计算文件的对应的唯一值(md5/SHA1)。如果文件内容变化，会产生新的md5或者SHA1值。这个值用在对静态文件的请求中。

response headers

``` json
ETag: W/"1879c-1642157e5f0"
```

浏览器接受到该文件后，并且把它缓存下来，当下次打开同样的文件时，会发送`If-None-Match`请求头，给服务器检查文件内容是否发生变化，如果没有变化，那么告诉浏览器没有变化，否则，返回新的文件。

response headers

``` json
If-None-Match: W/"1879c-1642157e5f0"
```

::: warning
默认情况下，服务的这个开关是打开的
:::

## Last-Modified 304

和 ETag 检查文件内容不同的是，Last-Modified 检查是文件最后的修改时间。这个值用在对静态文件的请求中。

response headers

``` json
Last-Modified: Thu, 21 Jun 2018 07:56:06 GMT
```

浏览器接受到该文件后，并且把它缓存下来，当下次打开同样的文件时，会发送`If-Modified-Since`请求头，给服务器检查文件修改时间是否发生变化，如果没有变化，那么告诉浏览器没有变化，否则，返回新的文件。

response headers

``` json
If-None-Match: W/"1879c-1642157e5f0"
```

::: warning
默认情况下，服务的这个开关是打开的。且Last-Modified的更新时间是以秒来计，如果你文件改动过于频繁(一秒内改动多次)，Last-Modified会失效，但是通常情况下，我们可以忽略这个问题，即使你拥有单身30年的手速。
:::

## Expires

服务器上设置一个绝对过期时间,告诉浏览器，在2018.8.3 19:33:34之前可以使用缓存在本地的文件。

response headers

``` json
Expires:Tue, 03 Aug 2018 19:33:34 GMT
```

如果设置永远过期

``` json
Expires: -1
```

::: warning
服务器时间和客户机时间可能存在偏差，所以只建议在长时间不会变化的文件下使用。所以这是个bug
:::

## Cache-Control

这个家伙是为了补丁，为了弥补上面 Expires 的bug。如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。

* 可缓存
  * public: 共有缓存，可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存。
  * private: 私有缓存，只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）,可以缓存响应内容。
  * no-cache: 在释放缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证。每次请求都要去验证缓存是否可用
  * only-if-cached:
* 到期
  * max-age=`<seconds>`:设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。
  * s-maxage=`<seconds>`:覆盖max-age 或者 Expires 头，但是仅适用于共享缓存(比如各个代理)，并且私有缓存中它被忽略。
* 重新验证和重新加载
  * must-revalidate: 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源。
  * proxy-revalidate: 与must-revalidate作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略
* 其他
  * no-store: 禁止缓存，不存储有关客户端请求或服务器响应的任何内容

## 相关链接

* [谷歌http缓存详解](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching) 
* [mozilla-Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
