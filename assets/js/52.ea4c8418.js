(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{355:function(v,_,i){"use strict";i.r(_);var t=i(14),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器拿到htm后-都做了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器拿到htm后-都做了什么"}},[v._v("#")]),v._v(" 浏览器拿到htm后，都做了什么？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("在基本上捋清楚了http的原理之后，进一步了解，当浏览器通过http获取到一个html文件以后，都做了哪些操作？我们通常说的浏览器阻塞是阻塞在什么地方？")]),v._v(" "),_("h2",{attrs:{id:"先说浏览器的渲染流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#先说浏览器的渲染流程"}},[v._v("#")]),v._v(" 先说浏览器的渲染流程？")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("浏览器解析html中的DOM标签，构建出一颗DOM树(包括display:none的元素)")])]),v._v(" "),_("li",[_("p",[v._v("浏览器根据css，构建成一个 样式规则树(只识别自己是识别的，忽略不识别的属性，cherome识别-webkit-，但是不识别-moz-)")])]),v._v(" "),_("li",[_("p",[v._v("把DOM树和样式规则树合并后生成渲染树(不包括display:none的元素,包括display等于node以外其他值的元素)")])]),v._v(" "),_("li",[_("p",[v._v("根据css(Box Dimensions盒子模型)计算出每一个对应DOM在屏幕中的位置")])]),v._v(" "),_("li",[_("p",[v._v("按照计算出的规则，把DOM绘制到屏幕(正常来讲，第一屏渲染结束)")])]),v._v(" "),_("li",[_("p",[v._v("当DOM的发生以下变化(可能由js,window,css引发),将会引发浏览器的回流机制(reflow)")]),v._v(" "),_("ul",[_("li",[v._v("大小：width,height，font-size,line-height,letter-spacing,text-indent等")]),v._v(" "),_("li",[v._v("位置：margin,padding等")]),v._v(" "),_("li",[v._v("定位方式：position,float")]),v._v(" "),_("li",[v._v("边距：border")]),v._v(" "),_("li",[v._v("显示隐藏：display")]),v._v(" "),_("li",[v._v("dom，内容")]),v._v(" "),_("li",[v._v("window大小的变化，resize")])])]),v._v(" "),_("li",[_("p",[v._v("当DOM仅仅发生风格，外观性质的变化时，会引起重绘，可能引起的变化如下")]),v._v(" "),_("ul",[_("li",[v._v("color,backgropund-color,shaow,")])])]),v._v(" "),_("li",[_("p",[v._v("回流会引起重绘，但重绘不一定会引起回流")])])]),v._v(" "),_("h2",{attrs:{id:"什么是盒模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是盒模型"}},[v._v("#")]),v._v(" 什么是盒模型？")]),v._v(" "),_("p",[v._v("上面提到，当浏览器计算DOM所在的位置的时候用到了盒子模型，那么什么是盒子模型？盒子模型是根据快元素的css属性计算出元素实际大小的一种方式。其中用到了块元素的以下几个属性")]),v._v(" "),_("ul",[_("li",[v._v("width，height")]),v._v(" "),_("li",[v._v("padding，内边距")]),v._v(" "),_("li",[v._v("border，边框")]),v._v(" "),_("li",[v._v("margin，外边距")])]),v._v(" "),_("p",[v._v("写到这里，就不得不提一下css中的"),_("code",[v._v("box-sizing")]),v._v("属性,"),_("code",[v._v("box-sizing")]),v._v("一共有三个可选的参数，")]),v._v(" "),_("ul",[_("li",[v._v("content-box: 为元素设置的width，height仅仅包括元素中内容的宽高，不包括padding和border")]),v._v(" "),_("li",[v._v("border-box: 为元素设置的width，height包括元素内容的宽度，padding以及border的和.(这个模式也是我们日常用到的模式)")]),v._v(" "),_("li",[v._v("inherit: 继承父节点"),_("code",[v._v("box-sizing")]),v._v("的值")])]),v._v(" "),_("h2",{attrs:{id:"什么是脱离文档流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是脱离文档流"}},[v._v("#")]),v._v(" 什么是脱离文档流？")]),v._v(" "),_("p",[v._v("上面说到，当文件的位置发生变化时，会引起浏览器回流机制。那么已经脱离了文档流的DOM呢？这就引出一个问题，什么时脱离文档流？当浏览器至上而下绘制一个个DOM的时候，这些'盒子'会由上而下依次排列。但是如果某个元素设置了display:absoult,fixed或者float:left属性时，那么这个元素将被它周围的元素‘无视’，它不再占据‘从上而下依次排列’的空间，而是‘分层’了，我们把这个现象叫做脱离文档流。(其中关于浮动的部分，可以参考这里)")]),v._v(" "),_("h2",{attrs:{id:"针对这些-怎么优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#针对这些-怎么优化"}},[v._v("#")]),v._v(" 针对这些，怎么优化？")]),v._v(" "),_("ul",[_("li",[v._v("浏览器本身会维护一个需要回流重绘的队列，当队列到了一定量或相对的时间间隔，就会执行进行一次回流或者重绘。当让我们也可以主动触发回流以清空这个队列。比如上面所说的那些操作。")]),v._v(" "),_("li",[v._v("讲多次dom操作，属性操作合并成一次操作")]),v._v(" "),_("li",[v._v("将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素")]),v._v(" "),_("li",[v._v("缓存需要经常获取那些引起浏览器重排的属性")])]),v._v(" "),_("h2",{attrs:{id:"关于浏览器阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于浏览器阻塞"}},[v._v("#")]),v._v(" 关于浏览器阻塞")]),v._v(" "),_("p",[v._v("在浏览器中渲染引擎和js引擎，他们两个是独立且相互排斥的线程。换句话说，当渲染引擎工作的时候，js引擎会停止运行，当js引擎工作的时候，渲染引擎会停止渲染。为什么会这样呢？因为在执行js脚本的时候，js可能修改DOM，如果并发可能会引起冲突。所以在执行js脚本的时候，一旦js引擎被阻塞，渲染引擎也会跟着陷入'等待'中。")]),v._v(" "),_("p",[v._v("除了渲染引擎的线程和js引擎线程，还有一个下载资源的线程，当dom解析时，遇到需要远程下载的资源时，就会去下载对应的资源。注意，这个进程和之前说的两个进程时没有关系的，是可以并发在前两个线程进行时的(对同一主机最大的请求量是6个)。但是，遇到需要下载的script时，还是会等js加载完且执行完后再继续执行渲染进程")]),v._v(" "),_("h2",{attrs:{id:"如何解决阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何解决阻塞"}},[v._v("#")]),v._v(" 如何解决阻塞？")]),v._v(" "),_("ul",[_("li",[v._v("script 放在body最后面")]),v._v(" "),_("li",[v._v("script 添加defer属性")]),v._v(" "),_("li",[v._v("动态异步加载script")])])])}),[],!1,null,null,null);_.default=s.exports}}]);