# 日常跨域解决方案小结

-------

上面叙述了一些跨域解决方案，其实还有其他方案同样可以解决跨域问题，比如Flish。但是，万变不离其宗，

* 传统方式实现跨域都需要满足下两个条件
  * 选用一个不受同源策略限制的载体，如js,iframe
  * 通知本地相应结果，jsonp是直接调用方法，其他方式是用跨域通信问题，postMessage,window.name,
* 新的技术
  * 新的技术，CORS
* 为了达到目的的非前端跨域手段
  * 请求代理

## 最后总结一下各个跨域方案优

|类型|本质|支持请求类型|可上传文件|
|:--|----|----|----:|
|jsonp|非同源限制请求 + 执行本地js | 否|
|CORS|服务端允许外域请求| 全部支持 | 是|
|nginx-proxy|在服务端进行转发| 全部支持 | 是|
|servr-proxy|在服务端进行转发,可以自定义操作| 全部支持 | 是|
|iframe+postMessage|非同源限制请求 + 外域通行| 是 | 否|
|iframe+window.name|非同源限制请求 + 外域通行| 是 | 否|
|iframe+form+postMessage|非同源限制请求 + 外域通行| 属于iframe+postMessage的补充型 | 是 |
