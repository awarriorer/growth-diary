### 日常跨域解决方案
-------

简单的给各位打野(我才不管你是辅助，adc,法师，还是tank)缕缕日常跨域解决方案，如果你是秋名山老司机，请不要停车，毕竟这真的是一趟开往幼儿园的车...

#### 开始（不正经的）正文 

老司机走了，现在只剩下清纯的了，就喜欢清纯的，别问我为啥...

#### a. 本来不想讲的跨域原因
跨域的原因，这是个已经被一个个老司机捅漏的问题，但是到我这儿，还是简单的说一下吧，要不然直接说跨域方案显得有点儿突然(虽然大叔很直接，但是还装的委婉点儿吧)。

跨域就想两个人处对象，服务器是一个花季少女，且这个妹子就在住在大家都知道的地方(知道域名就可访问)。但是妹子的父母可不想自己辛辛苦苦种的白菜被坏小子和猥琐大叔的一碗麻辣烫就骗走了。于是你未来的丈母娘说，你要是想跟我家姑娘交往，必须要有车(域名)有房(协议)有存款(端口)，并且你的车(域名)房(端口)和存款(协议)都得满足人家丈母娘的要求。

丈母娘要求：`https(大别野)://Q7.oooo(奥迪q7):8888(万).com`

|你的资产|丈母娘认证|原因|
|:--|----|----:|
|http://A1.wlhf(五菱宏光A1).com  | 失败 | 一穷二白 |
|https://A1.wlhf(五菱宏光A1).com | 失败 | 只有大别野 |
|https://Q7.wlhf(五菱宏光Q7).com | 失败 | 只有大别野 |
|https://Q7.oooo.com | 失败 | 钱不够 |
|https://Q7.oooo:8888.com | 成功 | 给你一朵小红花 |
|https://Q7.oooo:9999.com | 失败 | 这孩子钱太多可能走上了犯罪道路 |

#### b. 为什么要跨域？

虽然你没车没房还没有钱，但是别气馁，最起码你的判断是对的！但是你始终对那个姑娘念念不忘(业务需求,且产品经理的子弹已经上膛)，于是姑娘说:"只要你活儿好，技能比腰间盘更突出，我可以给你个机会！"

#### c. 有哪些方案(小伙儿可以学习哪些技巧)？
所有demo的源码，请访问[https://github.com/awarriorer/cross-domin.git](https://github.com/awarriorer/cross-domin.git)
* 轻量速成(简单配置就可满足你的欲望)
    * [jsonp](./jsonp.md)
    * [CORS](./cors.md)
    * [nginx-proxy](./nginx-proxy.md)
    * [server-proxy](./server-proxy.md)
* 小复杂
    * [iframe-postMessage](./iframe-postmessage.md)
    * [iframe-window.name](./iframe-window-name.md)
    <!-- * [iframe-window.domin](./server-proxy.md) -->
* 跨域上传文件
    * [CORS-upload](./cors-upload.md)
    * [iframe-form-postMessage-upload](./iframe-form-postMessage-upload.md)

#### d. [跨域方案小结](./conclusion.md)
