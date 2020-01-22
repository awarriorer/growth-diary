# $nextTick是怎么实现的

------

上一节我们可以得知，`vue`通过`vNode`的方式来记录，对比更新`DOM`，也就是说，`DOM`更新流程是这样的

* 数据发生变化
* `observe`监听到数据变化
* 触发`renderHook`
* `vNode`进行对比
* 增量更新`DOM`

由于这个更新是异步的，那么问题来了，我们什么时候才能拿到`DOM`？有时候我们需要操作`DOM`，有些第三方库也依赖`DOM(如 eChart)`

## nextTick的作用是什么

官方解释：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

官方例子

``` js
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick().then(function () {
  // DOM 更新了
})
```

## $nextTick是在哪儿挂载的

在入口,执行了`Mixin`

``` js
// src/core/instance/index.js
import { renderMixin } from './render'

// ...
renderMixin(Vue)
```

`renderMixin`的具体实现

``` js
// src/core/instance/render.js
export function renderMixin (Vue: Class<Component>) {
  // ...

  // 挂载 $nextTick方法
  Vue.prototype.$nextTick = function (fn: Function) {
    return nextTick(fn, this)
  }

  // ...
}
```

`nextTick`具体实现

``` js
// src/core/utils/nextTick.js

import { noop } from 'shared/util'
import { handleError } from './error'
import { isIOS, isNative } from './env'

// 回调函数执行队列
const callbacks = []

// 状态标志，正在添加
let pending = false

// 宏观任务或者微观的执行体
function flushCallbacks () {
  pending = false
  // 备份
  const copies = callbacks.slice(0)
  // 清空原数组
  callbacks.length = 0

  // 执行队列，也就是执行nextTick传入的函数
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

// 定义微服务
let microTimerFunc
// 定义宏服务来包装
let macroTimerFunc
// 标记，是否使用宏服务，
let useMacroTask = false

// 进行能力检测，对宏观任务的具体实现进行赋值
// 如果当前运行环境支持setImmediate，那么将采用 setImmediate ,IE9+支持
// setImmediate: 该方法用来把一些需要长时间运行的操作放在一个回调函数里，
// 在浏览器完成后面的其他语句后，就立刻执行这个回调函数。

// 如果支持 MessageChannel，那么采用 MessageChannel ，大多数都支持
// 创建一个新的消息通道，并通过它的两个MessagePort 属性发送数据。

// 若是都不支持，那就setTimeout
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  const channel = new MessageChannel()
  const port = channel.port2
  
  // 当收到消息后会处理
  channel.port1.onmessage = flushCallbacks

  //  宏观任务，通过MessageChannel给port1发条消息，从而触发 flushCallbacks
  macroTimerFunc = () => {
    port.postMessage(1)
  }
} else {
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

// 能力检测，定义微观任务
// 如果支持promise，那么微观任务=promise
// 否则微任务=宏任务
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  microTimerFunc = () => {
    p.then(flushCallbacks)
    // 兼容怪异模式
    if (isIOS) setTimeout(noop)
  }
} else {
  microTimerFunc = macroTimerFunc
}

// nextTick 的具体定义
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  // 往执行队列里，加入一个匿名函数
  callbacks.push(() => {
    // 如果传入了回调函数，那么执行
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      // 如果没有传入，那么执行_resolve
      _resolve(ctx)
    }
  })

  // 如果没有正在执行
  if (!pending) {
    // 标记正在执行
    pending = true
    // 执行宏观任务或者微观任务
    if (useMacroTask) {
      macroTimerFunc()
    } else {
      microTimerFunc()
    }
  }

  // 如果传入回调函数，那么返回一个promise
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}


```
