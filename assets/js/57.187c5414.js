(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{363:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[s._v("#")]),s._v(" 浏览器缓存")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"一个缓存的小场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个缓存的小场景"}},[s._v("#")]),s._v(" 一个缓存的小场景？")]),s._v(" "),a("p",[s._v("你想去电影院看一场电影，于是你买了一张电影票(这是一个请求)，在电影票的有效事件内(缓存没有失效)，你带着票去电影院就能看到想看的电影，即使你在电影中因为内急出来上了个厕所，再进去，也是不需要重新买票的。但是错过了这个时间(缓存已经失效)，你就需要重新买票(请求))再观看。")]),s._v(" "),a("h2",{attrs:{id:"缓存的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的方式"}},[s._v("#")]),s._v(" 缓存的方式")]),s._v(" "),a("ul",[a("li",[s._v("需要服务器验证")]),s._v(" "),a("li",[s._v("不需要服务器验证")])]),s._v(" "),a("h2",{attrs:{id:"etag-304"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-304"}},[s._v("#")]),s._v(" ETag 304")]),s._v(" "),a("p",[s._v("ETag是HTTP/1.1A的一种办法，由Web服务器生成，并写入响应头中。这个值用来计算文件的对应的唯一值(md5/SHA1)。如果文件内容变化，会产生新的md5或者SHA1值。这个值用在对静态文件的请求中。")]),s._v(" "),a("p",[s._v("response headers")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("ETag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" W/"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1879c-1642157e5f0"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("浏览器接受到该文件后，并且把它缓存下来，当下次打开同样的文件时，会发送"),a("code",[s._v("If-None-Match")]),s._v("请求头，给服务器检查文件内容是否发生变化，如果没有变化，那么告诉浏览器没有变化，否则，返回新的文件。")]),s._v(" "),a("p",[s._v("response headers")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("If-None-Match"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" W/"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1879c-1642157e5f0"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("默认情况下，服务的这个开关是打开的")])]),s._v(" "),a("h2",{attrs:{id:"last-modified-304"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-304"}},[s._v("#")]),s._v(" Last-Modified 304")]),s._v(" "),a("p",[s._v("和 ETag 检查文件内容不同的是，Last-Modified 检查是文件最后的修改时间。这个值用在对静态文件的请求中。")]),s._v(" "),a("p",[s._v("response headers")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("Last-Modified"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Thu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),s._v(" GMT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("浏览器接受到该文件后，并且把它缓存下来，当下次打开同样的文件时，会发送"),a("code",[s._v("If-Modified-Since")]),s._v("请求头，给服务器检查文件修改时间是否发生变化，如果没有变化，那么告诉浏览器没有变化，否则，返回新的文件。")]),s._v(" "),a("p",[s._v("response headers")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("If-None-Match"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" W/"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1879c-1642157e5f0"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("默认情况下，服务的这个开关是打开的。且Last-Modified的更新时间是以秒来计，如果你文件改动过于频繁(一秒内改动多次)，Last-Modified会失效，但是通常情况下，我们可以忽略这个问题，即使你拥有单身30年的手速。")])]),s._v(" "),a("h2",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[s._v("#")]),s._v(" Expires")]),s._v(" "),a("p",[s._v("服务器上设置一个绝对过期时间,告诉浏览器，在2018.8.3 19:33:34之前可以使用缓存在本地的文件。")]),s._v(" "),a("p",[s._v("response headers")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("Expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("Tue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v(" GMT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果设置永远过期")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("Expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("服务器时间和客户机时间可能存在偏差，所以只建议在长时间不会变化的文件下使用。所以这是个bug")])]),s._v(" "),a("h2",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[s._v("#")]),s._v(" Cache-Control")]),s._v(" "),a("p",[s._v('这个家伙是为了补丁，为了弥补上面 Expires 的bug。如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。')]),s._v(" "),a("ul",[a("li",[s._v("可缓存\n"),a("ul",[a("li",[s._v("public: 共有缓存，可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存。")]),s._v(" "),a("li",[s._v("private: 私有缓存，只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）,可以缓存响应内容。")]),s._v(" "),a("li",[s._v("no-cache: 在释放缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证。每次请求都要去验证缓存是否可用")]),s._v(" "),a("li",[s._v("only-if-cached:")])])]),s._v(" "),a("li",[s._v("到期\n"),a("ul",[a("li",[s._v("max-age="),a("code",[s._v("<seconds>")]),s._v(":设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。")]),s._v(" "),a("li",[s._v("s-maxage="),a("code",[s._v("<seconds>")]),s._v(":覆盖max-age 或者 Expires 头，但是仅适用于共享缓存(比如各个代理)，并且私有缓存中它被忽略。")])])]),s._v(" "),a("li",[s._v("重新验证和重新加载\n"),a("ul",[a("li",[s._v("must-revalidate: 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源。")]),s._v(" "),a("li",[s._v("proxy-revalidate: 与must-revalidate作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略")])])]),s._v(" "),a("li",[s._v("其他\n"),a("ul",[a("li",[s._v("no-store: 禁止缓存，不存储有关客户端请求或服务器响应的任何内容")])])])]),s._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching",target:"_blank",rel:"noopener noreferrer"}},[s._v("谷歌http缓存详解"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[s._v("mozilla-Cache-Control"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);