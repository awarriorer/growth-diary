### 组件内部状态小结
通过前一篇文章，我们现在知道，当我初始化一个`vue`实例的时候，其内部会将我们传入的`props, methods, data, computed, watch`选项做一些预处理后，然后再挂载到我们的当前实例`this`上

下面以一个简单的小例子说明问题。
#### 例子：
``` js
new Vue({
  props: {
    type: String,
    default: 'uncle-yang'
  },
  data: function(){
    return {
      age: 30
    }
  },
  computed: {
    showInfo: function(){
      return `my name is ${this.name}, i'm ${this.age}`;
    }
  },
  watch: {
    age: function(newVal, oldVal){
      console.log(`my new age is ${newVal}`);
    }
  },
  methods: {
    getName(){
      return `Hello! i'm ${this.name}`
    }
  }
})
```

#### props
* 获取到`props`选项
* 定义内部变量`_props`
* 调用`validateProp()`验证，获取`name`的值
* 通过`defineReactive`把`name`的值挂在`_props`上，且完成数据劫持
  * 生成和`name`相关的`Dep`实例
  * 当访问`name`值的时候触发`getter`函数，有`Dep.target`的情况下会收集依赖
  * 当设置`name`值的时候触发`setter`函数，调用`dep.notify`通知依赖`name`的`Watcher`实例
* 把值通过`proxy`挂载`this`(到当前实例)上，以便于当访问`this.name`的时候直接响应到上述逻辑


#### methods
* 获取到`props`选项
* 通过`bind`方法改变`getName`函数的`this`指向
* 把改变了`this`指向的`getName`函数挂载到当前`vue`实例上


#### data
* 获取到`data`选项(一个函数)
* 调用`getData`函数获取`data`函数中返回的对象`{age: 30}`
* 定义内部变量`_data`，且指向上述返回的对象`{age: 30}`
* 调用`proxy`函数，把`_data`中的属性(`age`)代理到`this`(当前实例)上
* 调用`observe`函数得到一个`Oberver`实例
  * `Oberver`中，通过调用`defineReactive`来观察`_data`的`age`属性

#### computed
* 获取到`computed`选项
* 定义内部变量`_computedWatchers`
* 创建`showInfo`对应的`Watcher`实例,并且把该实例缓存到`_computedWatchers`
  * 其中`showInfo`函数传入了`Watcher`对应的`expOrFn`变量
  * 而`expOrFn`被`Watcher`内部的`get`函数包装
  * `get`函数执行时，会先调用`pushTarget`函数开启收集依赖的关
  * 再执行把`this`指向当前`vue`实例的函数`function(){return ‘my name is ${this.name}, i'm ${this.age}’}`
  * 当函数运行到`this.name`和`this.age`时，触发其各自被`defineReactive`劫持的`getter`函数
  * 此时`Dep.target`有`_computedWatchers[showInfo]`对应的`Watcher`实例，从而执行`getter`中的`dep.depend()`
  * 然后执行`_computedWatchers[showInfo].addDep(dep)`
  * 在`Watcher.addDep`函数中，又把`_computedWatchers[showInfo]`对应的`Watcher`实例`push`到了`dep.subs`数组中
  * 从此完成`showInfo`对`name`和`age`依赖的收集
  * 且得到了函数运行的值`my name is uncle-yang, i'm 30`，并且赋值给`Watcher.value`
  * 当给`name`和`age`设置新值时，触发其各自被`defineReactive`劫持的`setter`函数
  * 然后执行到`dep.notify()`
  * 从而调用`dep.subs`中所有`Watcher.update`方法
  * 由于`computed`默认选项`{lazy: true}`，所以只是改变了`Watcher`内部变量的值`dirty = true`
* 调用`createComputedGetter`把`showInfo`包装成一个对象，其`getter`返回`Watcher.value`

#### watch
* 获取到`watch`选项
* 获取到`age`选项
* 调用`this.$watch('age', ageFun)`,这个方法在`stateMixin`方法中混入
* 在`$watch`中执行`new Watcher(vm, 'age', ageFun, {user: true})`
  * 在`watcher`实例中
  * `watcher.getter`为一个函数`function(){return vm.age}`
  * 在调用`get`方法是完成`watcher`依赖的收集
  * 当`age`改变时，触发传入的`ageFun`回调函数


  #### 小结
  * 状态初始化的顺序是`props,method,data,computed,watch`,所以访问顺序也是有区别的，例如可以在`data`中访问`props`，但是不能反过来


