### html上的SEO
关于SEO，是网站希望被搜索引擎获取其想传递的内容，从而通过搜索引擎搜索时，能获取靠前的位置。在这段话中，其实就是一个点，你想让搜索引擎的爬虫，获取到网站的什么信息？或者说，爬虫是怎么获取网站上的信息的？

* title: 中心思想很重要
* meta信息: keyword,description,网站的关键字和描述,很重要！关于`meta`标签，[请点击这里](./meta.md)
* head: 头部内容
* h1~h6: 
* a: title添加介绍
* img: alt添加介绍
* strong,b,u,i

<!-- 举个例子 -->
``` html
<head>
    <title>我不是针对谁，各位都是垃圾！</title>
    <meta name="keywords" content="楼上的屌">
    <meta name="description" content="楼上的屌">
</head> 
<body> 
    <h1>我仅次于title大哥，下面的都是老子的小弟，按辈分给老子站好！</h1>
    <h2></h2> 
    <h3></h3> 
    <h4></h4> 
    <h5></h5> 
    <h6></h6>
    <img src="你们都没我精彩，老子是彩色的.jpg" alt="关于彩色的说明"> 
    <a href="/" title="google">去哪儿吖？google</a> 
    <strong>看名字就知道，我在强调</strong>
    <b>关键词强调</b>
    <u>关键词强调</u>
    <i>关键词强调</i>
</body> 
</html>
```