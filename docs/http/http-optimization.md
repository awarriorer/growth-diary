# HTTP前端性能优化

-------
关于优化，总体可分为

* 服务层性能优化
  * [引入缓存](./browser-cache.md)，响应时间
  * CDN加速
  * 优化响应报文，对较大的资源，可进行压缩
* 浏览器端性能优化
  * 资源压缩，减少HTTP请求体积
    * 图片：webpack,gulp,grunt,(高保真在线压缩tinypng)[https://tinypng.com/]
    * 代码：webpack,gulp,grunt
  * 合并请求，减少HTTP请求次数
    * 图片：雪碧图，base64转化
    * 字体图标：图标字体化，[iconfont](http://www.iconfont.cn/)
    * 代码合并：webpack,gulp,grunt
  * keep-alive,持久化链接,减少TCP链接
  * 减少协议开销，比如`cookie-free`
