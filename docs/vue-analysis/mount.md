### 模板编译都经历了那些什么
-------

首先回顾一下`vue._init()`这个函数
``` js
Vue.prototype._init = function (options?: Object) {
    // …………，各种状态初始化

    // 如果传入了el，那么渲染
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
}
```
从上面的代码中可以看出，在`init`函数最后，执行了`$mount`这个函数。

#### $mount
``` js
// platforms/web/runtime/index.js
// public mount method
Vue.prototype.$mount = function (
    el?: string | Element,
    hydrating?: boolean
): Component {
    el = el && inBrowser ? query(el) : undefined
    return mountComponent(this, el, hydrating)
}

// core/instance/lifecycle
export function mountComponent (
    vm: Component,
    el: ?Element,
    hydrating?: boolean
): Component {
    vm.$el = el
    if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode
    }
    callHook(vm, 'beforeMount')

    let updateComponent
    updateComponent = () => {
        vm._update(vm._render(), hydrating)
    }

    // 创建一个watcher,其回调是其render函数
    new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */)
    hydrating = false

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true
        callHook(vm, 'mounted')
    }
    return vm
}


// platfrom/web/entry-runtime-with-compiler.js
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
    el?: string | Element,
    hydrating?: boolean
): Component {
    // 获取到要渲染的节点
    el = el && query(el)

    // 不可以是body或者document
    if (el === document.body || el === document.documentElement) {
        return this
    }

    const options = this.$options
    // 解析模版,el,定义render
    if (!options.render) {
        let template = options.template

        // 确认模版
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {
                    template = idToTemplate(template)
                }
            } else if (template.nodeType) {
                template = template.innerHTML
            } else {
                return this
            }
        } else if (el) {
            template = getOuterHTML(el)
        }

        // 确定render,和staticRenderFns
        if (template) {
            const { render, staticRenderFns } = compileToFunctions(template, {
                shouldDecodeNewlines,
                shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
            }, this)
            options.render = render
            options.staticRenderFns = staticRenderFns
        }
    }
    return mount.call(this, el, hydrating)
}
```
