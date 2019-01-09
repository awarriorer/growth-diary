### 源码分析前的准备工作
-------
想了好久，不知道怎么写这一系列博文的小序。还是直接开始主题吧，接下来的一段时间，我将详细的写一些关于vue源码分析类的文章和见解。如有不对的地方，还请多多指教！

我现在研究vue的版本为2.5.16


#### 关于vue的目录结构说明

```
.
├── LICENSE //开源许可
├── README.md
├── dist //输出目录
├── package.json // 打包配置
├── src //主要内容，都在这个目录里面了
│   ├── compiler //模版编译，指令解析
│   │   ├── codegen
│   │   │   ├── events.js
│   │   │   └── index.js
│   │   ├── create-compiler.js
│   │   ├── directives
│   │   │   ├── bind.js
│   │   │   ├── index.js
│   │   │   ├── model.js
│   │   │   └── on.js
│   │   ├── error-detector.js
│   │   ├── helpers.js
│   │   ├── index.js
│   │   ├── optimizer.js
│   │   ├── parser
│   │   │   ├── entity-decoder.js
│   │   │   ├── filter-parser.js
│   │   │   ├── html-parser.js
│   │   │   ├── index.js
│   │   │   └── text-parser.js
│   │   └── to-function.js
│   ├── core //核心模块，是我们主要研究的模块
│   │   ├── components //组件的实现
│   │   │   ├── index.js
│   │   │   └── keep-alive.js
│   │   ├── config.js // vue的配置文件
│   │   ├── global-api // 全局API，顶层的API
│   │   │   ├── assets.js // (干嘛的？)
│   │   │   ├── extend.js // extend的实现
│   │   │   ├── index.js // 全局API挂载入口
│   │   │   ├── mixin.js // mixin的实现
│   │   │   └── use.js //use的实现
│   │   ├── index.js // 主文件，入口文件
│   │   ├── instance // vue实例
│   │   │   ├── events.js // 自定义事件机制，$emit,$once,$on,$off
│   │   │   ├── index.js // 实例主文件
│   │   │   ├── init.js // 初始化,init(),基础变量的声明和挂载，以及事件，钩子等模块方法的调用始发点
│   │   │   ├── inject.js // 组件注入
│   │   │   ├── lifecycle.js // 声明周期的实现
│   │   │   ├── proxy.js // 代理
│   │   │   ├── render-helpers //渲染助手
│   │   │   │   ├── bind-object-listeners.js
│   │   │   │   ├── bind-object-props.js
│   │   │   │   ├── check-keycodes.js
│   │   │   │   ├── index.js
│   │   │   │   ├── render-list.js
│   │   │   │   ├── render-slot.js
│   │   │   │   ├── render-static.js
│   │   │   │   ├── resolve-filter.js
│   │   │   │   └── resolve-slots.js
│   │   │   ├── render.js // 渲染方法,挂载$nextTick
│   │   │   └── state.js // 初始化状态，props,data,computed,methods,watch,
│   │   ├── observer //变化监听,观察者
│   │   │   ├── array.js //数组监听，方法重写的实现
│   │   │   ├── dep.js //观察者接口的实现，addSub,removeSub
│   │   │   ├── index.js // 入口
│   │   │   ├── scheduler.js //调度中心，当观察到变化时，触发哪些事件,做什么动作
│   │   │   ├── traverse.js // 还没懂
│   │   │   └── watcher.js // 收集依赖关系，触发$watch
│   │   ├── util //业务逻辑工具类
│   │   │   ├── debug.js //调试
│   │   │   ├── env.js //代码执行环境
│   │   │   ├── error.js //错误输出
│   │   │   ├── index.js //汇总
│   │   │   ├── lang.js //
│   │   │   ├── next-tick.js //nextTick的实现
│   │   │   ├── options.js // 
│   │   │   ├── perf.js
│   │   │   └── props.js
│   │   └── vdom //虚拟dom
│   │       ├── create-component.js
│   │       ├── create-element.js
│   │       ├── create-functional-component.js
│   │       ├── helpers //助手
│   │       │   ├── extract-props.js
│   │       │   ├── get-first-component-child.js
│   │       │   ├── index.js
│   │       │   ├── is-async-placeholder.js
│   │       │   ├── merge-hook.js
│   │       │   ├── normalize-children.js
│   │       │   ├── resolve-async-component.js
│   │       │   └── update-listeners.js
│   │       ├── modules //
│   │       │   ├── directives.js
│   │       │   ├── index.js
│   │       │   └── ref.js
│   │       ├── patch.js
│   │       └── vnode.js
│   ├── platforms //平台
│   │   ├── web // web平台
│   │   │   ├── compiler
│   │   │   │   ├── directives
│   │   │   │   │   ├── html.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── text.js
│   │   │   │   ├── index.js
│   │   │   │   ├── modules
│   │   │   │   │   ├── class.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── options.js
│   │   │   │   └── util.js
│   │   │   ├── entry-compiler.js
│   │   │   ├── entry-runtime-with-compiler.js
│   │   │   ├── entry-runtime.js
│   │   │   ├── entry-server-basic-renderer.js
│   │   │   ├── entry-server-renderer.js
│   │   │   ├── runtime
│   │   │   │   ├── class-util.js
│   │   │   │   ├── components
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── transition-group.js
│   │   │   │   │   └── transition.js
│   │   │   │   ├── directives
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── show.js
│   │   │   │   ├── index.js
│   │   │   │   ├── modules
│   │   │   │   │   ├── attrs.js
│   │   │   │   │   ├── class.js
│   │   │   │   │   ├── dom-props.js
│   │   │   │   │   ├── events.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── style.js
│   │   │   │   │   └── transition.js
│   │   │   │   ├── node-ops.js
│   │   │   │   ├── patch.js
│   │   │   │   └── transition-util.js
│   │   │   ├── server
│   │   │   │   ├── compiler.js
│   │   │   │   ├── directives
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── show.js
│   │   │   │   ├── modules
│   │   │   │   │   ├── attrs.js
│   │   │   │   │   ├── class.js
│   │   │   │   │   ├── dom-props.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.js
│   │   │   │   └── util.js
│   │   │   └── util
│   │   │       ├── attrs.js
│   │   │       ├── class.js
│   │   │       ├── compat.js
│   │   │       ├── element.js
│   │   │       ├── index.js
│   │   │       └── style.js
│   │   └── weex //wexx平台，目前不考虑
│   │       ├── compiler
│   │       │   ├── directives
│   │       │   │   ├── index.js
│   │       │   │   └── model.js
│   │       │   ├── index.js
│   │       │   └── modules
│   │       │       ├── append.js
│   │       │       ├── class.js
│   │       │       ├── index.js
│   │       │       ├── props.js
│   │       │       ├── recycle-list
│   │       │       │   ├── component-root.js
│   │       │       │   ├── component.js
│   │       │       │   ├── index.js
│   │       │       │   ├── recycle-list.js
│   │       │       │   ├── text.js
│   │       │       │   ├── v-bind.js
│   │       │       │   ├── v-for.js
│   │       │       │   ├── v-if.js
│   │       │       │   ├── v-on.js
│   │       │       │   └── v-once.js
│   │       │       └── style.js
│   │       ├── entry-compiler.js
│   │       ├── entry-framework.js
│   │       ├── entry-runtime-factory.js
│   │       ├── runtime
│   │       │   ├── components
│   │       │   │   ├── index.js
│   │       │   │   ├── richtext.js
│   │       │   │   ├── transition-group.js
│   │       │   │   └── transition.js
│   │       │   ├── directives
│   │       │   │   └── index.js
│   │       │   ├── index.js
│   │       │   ├── modules
│   │       │   │   ├── attrs.js
│   │       │   │   ├── class.js
│   │       │   │   ├── events.js
│   │       │   │   ├── index.js
│   │       │   │   ├── style.js
│   │       │   │   └── transition.js
│   │       │   ├── node-ops.js
│   │       │   ├── patch.js
│   │       │   ├── recycle-list
│   │       │   │   ├── render-component-template.js
│   │       │   │   └── virtual-component.js
│   │       │   └── text-node.js
│   │       └── util
│   │           ├── element.js
│   │           ├── index.js
│   │           └── parser.js
│   ├── server //服务，模版的解析，具体渲染的实现
│   │   ├── bundle-renderer
│   │   │   ├── create-bundle-renderer.js
│   │   │   ├── create-bundle-runner.js
│   │   │   └── source-map-support.js
│   │   ├── create-basic-renderer.js
│   │   ├── create-renderer.js
│   │   ├── optimizing-compiler
│   │   │   ├── codegen.js
│   │   │   ├── index.js
│   │   │   ├── modules.js
│   │   │   ├── optimizer.js
│   │   │   └── runtime-helpers.js
│   │   ├── render-context.js
│   │   ├── render-stream.js
│   │   ├── render.js
│   │   ├── template-renderer
│   │   │   ├── create-async-file-mapper.js
│   │   │   ├── index.js
│   │   │   ├── parse-template.js
│   │   │   └── template-stream.js
│   │   ├── util.js
│   │   ├── webpack-plugin
│   │   │   ├── client.js
│   │   │   ├── server.js
│   │   │   └── util.js
│   │   └── write.js
│   ├── sfc
│   │   └── parser.js //解析器
│   └── shared //公用的变量
│       ├── constants.js
│       └── util.js //工具类
└── types
    ├── index.d.ts
    ├── options.d.ts
    ├── plugin.d.ts
    ├── vnode.d.ts
    └── vue.d.ts
```

#### 问题：new vue()时都发生了什么？
