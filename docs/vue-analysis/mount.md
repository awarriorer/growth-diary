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

    // 渲染节点
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

    // 改变内部变量的状态_isMounted，触发钩子
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
    // 如果render函数不存在
    if (!options.render) {
        let template = options.template

        // 确认模版，template存在的时候，获取template,不存在的时候获取el的outerHtml
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

        // 使template编译成render函数
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

#### 那么模版是怎么编译的？
从上面的代码中，可以看出，最后执行了`compileToFunctions`函数得到了`render`和`staticRenderFns`函数。那么也就是是，模版的解析是在`compileToFunctions`这个函数中实现的。继续扒代码

``` js
// src/paltforms/compiler/index

const { compile, compileToFunctions } = createCompiler(baseOptions)

```
