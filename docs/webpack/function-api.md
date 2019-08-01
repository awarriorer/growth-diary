### webpack中，常用API

#### require.context() 批量导入
作用：函数遍历目标文件夹的所有文件一次性导入到执行函数的模块中

``` js
/**
 * directory {String} 读取文件的路径
 * useSubdirectories {Boolean} 是否递归子目录
 * regExp {RegExp} 匹配文件的规则
 */
require.context(directory, useSubdirectories, regExp)
```
返回一个`function`，且这个函数有三个属性
* `resolve` `${function}`,接受一个参数`request`，为匹配文件的相对路径
* `keys {Function}`返回匹配成功模块的名字组成的数组
* `id {String}` 执行环境的id,返回的是一个字符串,主要用在module.hot.accept

使用场景：
在配置`vue-router`的时候，可以使用此函数获取`routers`文件下所有的配置

routers文件夹下有以下几个文件
* a.js
* b.js
* c.js

``` js
// 其中a,b,c.js 中，分别定义了关于自己模块的路由，如
export default [
    {
        path: '/',
        name: '首页',
        component: () => import('views/index.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: () => import('views/show.vue')
    }
    // ......
]

// 获取routers下面所有的配置
let routerFiles = require.context('./routers', false, /\.js$/);
let routerCfg = [];

routerFiles.keys().forEach((key) => {
    routerCfg = routerCfg.concat(routerFiles(key).default)
})
```







#### import() 按需加载
``` js
// 语法， 返回一个promise
import(/* webpackChunkName: '生成的模块名称' */ /* webpackMode: 指定以不同的模式解析动态导入 */ filePath)

if(true){
    import('./show.js').then((_) => {
        console.log(_)
    })
}
```


#### require.ensure 按需加载
已经被`import()`取代
``` js
require.ensure([], (require) => {
    let show = require('./show.js')

    // .....
})
```