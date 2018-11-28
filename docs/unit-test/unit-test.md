### 前端单元测试

#### 关于单元测试的几个疑问
* 什么是单元测试？什么是一个单元？
    * 关注应用中的每一个零部件(组件)的正常运转，防止后续更改影响之前的组件
    * 单元，可以是一个组件，一个function,一个class，或者是一个模块
* 用什么测试？
    * Karma, Google开发的前端测试框架，运行时会启动一个web服务，将js源代码和测试脚本放到PhantomJS或者Chrome上执行
    * Jasmine, 单元测试框架，不依赖浏览器，dom
    * coverage, 单元测试的覆盖率

### 关于karma常用插件
* karma-jasmine
* karma-chrome-launcher

### 单元测试渐进式学习
* Jasmine-APi
* 测试静态文件
* 测试模块
* 测试vue组件