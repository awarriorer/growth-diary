## 千里之行，始于足下

Hi,我是大叔杨，一名前端开发者。我将在这个项目中记录总结和学习。希望我的笔记能给你带来一些帮助，也希望你能及时的指出笔记中的错误和不足。愿你我始终都在求知的路上勇往直前，也愿你我的内心始终装着一个少年！

你也可以点击[我的个人小站](http://blog.uncle-yang.com/)以获得更好的阅读体验。

若有疑问，可以通过邮箱(awarriorer@163.com)联系我

努力一点，生活更美好...

### 基础知识
#### HTTP
* [一个请求都经历了些什么](./http/request-life.md)
* [一个请求中都包含了什么](./http/request-content.md)
* [常见请求状态码](./http/response-status-codes.md)
* [浏览器缓存](./http/browser-cache.md)
* [浏览器请求限制](./http/request-limit.md)
* [跨域解决方案](./http/cross-domain/index.md)
* [代理和反向代理](./http/about-proxy.md)
* [什么又是HTTPS](./http/about-https.md)
* [关于websocket](./http/webSocket.md)
* [HTTP简要成长史](./http/http-history.md)
* [Api设计的一些见解](./http/api-architecture.md)
* [HTTP前端性能优化](./http/http-optimization.md)
<!-- * 关于HTTP的一些问题 -->

#### HTMl 
* [浏览器拿到htm后,都做了什么](./html/browser-render.md)
* html4和html5到底有什么区别？
* [html语义化怎么体现？](./html/semanticization.md) 
* [html上的SEO](./html/seo.md)
* [关于meta](./html/meta.md)

#### CSS
* Css 选择器和优先级
* [关于居住中显示](./style/layout-center.md)
<!-- * 关于浮动 -->
<!-- * 文字两端对齐 -->
<!-- * css三角形 -->
<!-- * css常见布局及实现 -->
<!-- * css模态框 -->
* [关于flex布局](./style/about-flex.md)
* [Less常用语法](./style/less.md)
* [Sass常用语法](./style/sass.md)

#### JS基础
<!-- * 语句
* 数据类型 -->
* [String](./js/string.md) 
* [Boolean](./js/boolean.md) 
* [Number](./js/number.md)
* [Object](./js/object.md)
* [Map](./js/map.md)
* [WeakMap](./js/weakMap.md)
* [Array](./js/array.md)
* [Set](./js/set.md)
* [WeakSet](./js/weakSet.md)
* [Date](./js/date.md)
* [RegExp](./js/regExp.md)
* [Function](./js/function.md)
* [Math](./js/math.md) 
* [JSON](./js/json.md) 
* [BOM](./js/bom.md) 
* [DOM](./js/dom.md)
* [Event](./js/event.md)
* [Ajax](./js/ajax.md)
* [Cookie & Storage](./js/cookie-storage.md)
* [File & FileReader](./js/file.md)
* [Promise](./js/promise.md)
* [Async await](./js/async-await.md)
* [Proxy](./js/proxy.md)
* [Class](./js/class.md)
* [Generator](./js/generator.md)
* [Js脑图](./js/js-mind.md)

### Js 进阶
* [严格模式](./js-advanced/use-strict.md)
* [内存机制](./js-advanced/ram.md)
* [作用域链 & 原型链](./js-advanced/scope-prototype.md)
* [继承](./js-advanced/extend.md)
* [闭包](./js-advanced/closure.md)
* [Promise的实现](./js-advanced/promise.md)
* [Async await的实现](./js-advanced/async-await.md)
* [模块机制](./js-advanced/module.md)


<!-- ### 数据结构
* [前篇](./data-structure/before.md)
* [数组(Array)](./data-structure/array.md)
* 堆栈(Stack)
* 队列(Queue)
* 链表(Linked List）
* 树(Tree)
* 散列表(Hash)
* 堆(Heap)
* 图(Graph)

### 算法
* 前篇
* 常用排序
* 数组去重
* 动态规划
* 图片旋转
* 多路归并
* 二分查找法
* 二叉树
* DFS 深度优先 -->

### 设计模式(Design Patterns)
* [前篇](./design-patterns/before.md)
* 创建模式
    * [工厂模式(Factory)](./design-patterns/factory.md)
    * [单例模式(Singleton)](./design-patterns/singleton.md)
    * 建造者模式(Builder)
* 结构模式
    * [适配器模式(Adapter)](./design-patterns/adapter.md)
    * [过滤器模式(Filter))](./design-patterns/filter.md)
    * [装饰者模式(Decorator)](./design-patterns/decorator.md)
    * [代理模式(Proxy)](./design-patterns/proxy.md)
* 行为模式
    * [观察者模式(Observer)](./design-patterns/observer.md)
    * [命令模式(Command)](./design-patterns/command.md)

### 前端框架
* Vue(v2.5.16) 源码分析
    * [源码分析前的准备](./vue-analysis/vue-ready.md)
    * [vue是什么(一)](./vue-analysis/vue-1.md)
    * [vue是什么(二)](./vue-analysis/vue-2.md)
    * [new vue时发生了什么](./vue-analysis/new-vue.md)
    * [理解内部状态前的准备](./vue-analysis/state-0.md)
    * [组件内部状态](./vue-analysis/state-1.md)
    * [组件内部状态小结](./vue-analysis/state-2.md)
    * [模板编译都经历了那些什么](./vue-analysis/mount.md)
    * 虚拟dom是什么？虚拟dom如何比对差异的
    * $nextTick是怎么实现的？
    * 生命周期中的各个环节都做了什么
    * components是怎么实现的？
    * 指令是怎么实现的？
    * user 插件的原理
    * vue单元测试
* Vue-router
* Vuex

### 构建工具
* Grunt
    * 常用配置
    * 工作原理
    * 如何写一个插件
* Gulp
    * 常用配置
    * 工作原理
    * 如何写一个插件
* Webpack
    * 常用配置
    * [常用函数](./webpack/function-api.md)
    * 工作原理
    * 如何写一个bable
    * 如何写一个插件
    * 日常插件收集
    * Flow.js
### TypeScript

### 单元测试
* Jasmine
* 测试静态文件
* 测试模块
* 测试vue组件

### Node
* Npm
    * [日常命令](./node/npm/command.md)
    * [package.json](./node/npm/package.md)
    * 工作原理
    * 如何搭建一个npm服务
    * 如何发布一个npm包
* Async
* Event
* Express

### 开发工具
* [Chorme](./dev-tools/chrome.md)
* [git 日常命令](./dev-tools/git-command.md)
* Charles
    * 日常抓包
    * 代理/替换请求
* Sublime
* [VsCode](./dev-tools/vscode.md)
* [EditorConfig](./dev-tools/editor-config.md)

### Linux
* Linux日常命令
* Vim

### Nginx
### Docker
* [docker日常命令](./docker/command.md)
### Mysql

### 持续集成
* docker + jenkins