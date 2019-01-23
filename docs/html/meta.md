### 关于meta标签

关于meta都有哪些选项？
|元数据名称(name的值)|说明|
|:---|:----|
|application name|当前页所属Web应用系统的名称|
|keywords|描述网站内容的关键词,以逗号隔开，用于SEO搜索|
|description|当前页的说明|
|author|当前页的作者名|
|copyright|版权信息|
|renderer|renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面|
|viewreport|它提供有关视口初始大小的提示，仅供移动设备使用|

``` html
<!-- 声明编码方式 -->
<meta charset="UTF-8"> 
<!-- 版权 -->
<link rel="copyright" href="copyright.html"/>
<!-- 关于作者 -->
<meta name="author" content="name,name@163.com">


<!--  http-equiv属性 start-->

<!-- 用法 -->
<meta http-equiv="参数" content="具体的描述">
<!-- 旧的HTML，不推荐 -->
<meta http-equiv="content-Type" content="text/html;charset=utf-8">
<!-- 浏览器采取何种版本渲染当前页面，指定IE和Chrome使用最新版本渲染当前页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- 
    指定请求和响应遵循的缓存机制
    content的值可以是
        no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
        no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
        public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
        private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
        maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。
-->
<meta http-equiv="cache-control" content="no-cache">
<!-- 网页到期时间，设定网页的到期时间，过期后网页必须到服务器上重新传输 -->
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
<!-- 自动刷新并指向某页面，2秒后跳转向http://www.uncle-yang.com -->
<meta http-equiv="refresh" content="2；URL=http://www.uncle-yang.com/"> 
<!-- cookie设定, 如果网页过期。那么这个网页存在本地的cookies也会被自动删除。-->
<meta http-equiv="Set-Cookie" content="name, date">
<meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT">


<!--  http-equiv属性 end-->


<!-- SEO,爬虫 start -->

<!-- 网站描述  -->
<meta name="description" content="150 words" /> 
<!-- 网站关键字 -->
<meta name="keywords" content="your tags" /> 
<!-- 
    none : 搜索引擎将忽略此网页，等价于noindex，nofollow。
    noindex : 搜索引擎不索引此网页。
    nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。
    all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。
    index : 搜索引擎索引此网页。
    follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。
--> 
<meta name="robots" content="index,follow" /> 
<meta name="google" content="index,follow" /> 
<meta name="googlebot" content="index,follow" /> 
<meta name="verify" content="index,follow" /> 
<!-- 搜索引擎爬虫重访时间， 如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问-->
<meta name="revisit-after" content="7 days">

<!-- SEO,爬虫 end -->


<!-- 移动端渲染 start！-->

<!-- 设置移动端的窗口-->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- 启用 WebApp 全屏模式 --> 
<meta name="apple-mobile-web-app-capable" content="yes" /> 
<!-- 隐藏状态栏/设置状态栏颜色：只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent 。 --> 
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> 
<!-- 添加到主屏后的标题 --> 
<meta name="apple-mobile-web-app-title" content="标题"> 
<!-- 忽略数字自动识别为电话号码 --> 
<meta content="telephone=no" name="format-detection" /> 
<!-- 忽略识别邮箱 --> 
<meta content="email=no" name="format-detection" />
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 --> 
<meta name="HandheldFriendly" content="true"> 
<!-- 微软的老式浏览器 --> 
<meta name="MobileOptimized" content="320"> 
<!-- uc强制竖屏 --> 
<meta name="screen-orientation" content="portrait"> 
<!-- QQ强制竖屏 --> 
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 --> 
<meta name="full-screen" content="yes"> 
<!-- QQ强制全屏 --> 
<meta name="x5-fullscreen" content="true"> 
<!-- UC应用模式 --> 
<meta name="browsermode" content="application"> 
<!-- QQ应用模式 --> 
<meta name="x5-page-mode" content="app"> 
<!-- windows phone 点击无高光 --> 
<meta name="msapplication-tap-highlight" content="no">

<!-- 移动端渲染 end！-->

<!-- 添加智能 App 广告条 Smart App Banner：告诉浏览器这个网站对应的app，并在页面上显示下载banner:https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html --> 
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL" /> 

```

更多详细信息，可以参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)