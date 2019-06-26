### new vue 时发生了什么？
现在我们已经知道，`vue`本质上是一个构造函数。且在执行`new vue(options)`时，其内部执行了`this._init(options)`函数。那么这个函数中都做了哪些事情？

``` js
// core/instance/index.js
let uid = 0

Vue.prototype._init = function (options?: Object) {
    // 当前vue实例
    const vm: Component = this
    // 维护uid，注意不是cid
    vm._uid = uid++

    // 做一个标示，以免被观察
    vm._isVue = true
    // 合并选项
    if (options && options._isComponent) {
      // 如果当前实例是内部组件
      initInternalComponent(vm, options)
    } else {
      // 定义$options
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }

    // 这里为啥？
    vm._renderProxy = vm
    // 暴露自己
    vm._self = vm

    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    // 触发钩子: beforeCreate
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    // 触发钩子: created
    callHook(vm, 'created')

    // 如果传入了el，那么渲染
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
```

#### initLifecycle
初始化运行时所需要的基础内部变量
``` js
// core/instance/lifecycle.js
export function initLifecycle (vm: Component) {
  const options = vm.$options

  // 找到父亲元素，并且把子类(当前实例)push到父亲的children队列
  let parent = options.parent
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }

  // 父亲实例
  vm.$parent = parent
  // 根实例
  vm.$root = parent ? parent.$root : vm
  // children实例
  vm.$children = []
  // 定义refs
  vm.$refs = {}

  // 初始化内部变量
  vm._watcher = null
  vm._inactive = null
  vm._directInactive = false
  vm._isMounted = false
  vm._isDestroyed = false
  vm._isBeingDestroyed = false
}
```

#### initEvents
初始化和事件相关的内部变量
``` js
// core/instance/events.js
export function initEvents (vm: Component) {
  // 初始化内部events相关变量
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
```

#### initRender
初始化和渲染相关的内部变量
``` js
// core/instance/render.js
export function initRender (vm: Component) {
  // 虚拟dom,子树的跟节点
  vm._vnode = null
  // v-once 缓存的树
  vm._staticTrees = null
  const options = vm.$options
  // 父节点的_vnode
  const parentVnode = vm.$vnode = options._parentVnode
  // 渲染上下文
  const renderContext = parentVnode && parentVnode.context
  
  // 当前实例的插槽节点 
  vm.$slots = resolveSlots(options._renderChildren, renderContext)
  // 范围插槽
  vm.$scopedSlots = emptyObject
  
  /*
  * 给当前实例绑定createElement方法
  * createElement接受的变量，
  * context: Component,上下文环境
  * tag: any,
  * data: any,
  * children: any,
  * normalizationType: any,归一化类型
  * alwaysNormalize: boolean，简单或者正常渲染子节点
  */

  // 内部版本由从模板编译的渲染函数使用
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  // 标准化公开版本，适用于用户自定义 render函数
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

  // 父节点的data
  const parentData = parentVnode && parentVnode.data

  // 定义当前实例的$attrs,$listeners,数据来源于父节点对应的信息，浅监听
  defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
  defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
}
```





#### initInjections
初始化依赖注入
``` js
// core/instance/inject.js
export function initInjections (vm: Component) {
  const result = resolveInject(vm.$options.inject, vm)
  if (result) {
    toggleObserving(false)
    Object.keys(result).forEach(key => {
      defineReactive(vm, key, result[key])
    })
    toggleObserving(true)
  }
}
```

#### initState
初始化组件状态,下一章节将详细讲这一部分
``` js
// core/instance/state.js
export function initState (vm: Component) {
  // 当前实例的监听
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

#### initProvide
初始化和inject相关的内部变量
``` js
// core/instance/inject.js
export function initProvide (vm: Component) {
  const provide = vm.$options.provide
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }
}
```
#### 思维导图
![思维导图](./images/vue-init.svg)