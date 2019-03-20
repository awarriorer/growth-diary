### Package.json
-----------
在执行npm命令时,会生成相对应的Package.json,其中字段寓意如下

``` json
{
    "name": "项目名称",
    "version": "1.0.0",
    "description": "项目描述",
    // 项目作者信息
    "author": {
        "name": "uncle-yang",
        "email": "awarriorer@163.com",
    },
   
    // 项目关键值，用于npm中搜索
    "keywords": [
        "笔记",
        "博客"
    ],
    "homepage": "http://blog.uncle-yang.com/",
    // 项目入口文件
    "main": "index.js",
    // 配置脚本命令，npm run run
    "scripts": {
        "run": "node index.js",
    },
    // 项目中的bug
    "bugs" : [
        {
            "url": "问题描述地址",
            "email": ""
        }
    ],
    // 项目存放的位置
    "repository": {
        // 可以是git,svn
        "type": "git", 
        // 位置
        "url": "https://github.com/awarriorer/growth-diary.git"
    },
    // 项目贡献者
    "contributors": [

    ],
    // 项目在生产环境中依赖的包
    "dependencies": {
        // 固定版本：必须是4.16.3这个版本
        "express": "4.16.3",
        // 兼容版本：以4.16.3"版本开始，最高不能超过5.0.0
        "express": "^4.16.3",
        // 大概是这个版本
        "express": "～4.16.3",
        // 大于某个版本
        "express": ">=4.16.3",
        // 小于某个版本
        "express": "<4.16.3",
        // 版本区间范围
        "express": ">=2.0.0 <4.16.3",
        // 版本区间
        "express": "2.0.0 - 4.16.3",
        // 选择版本
        "express": "2.0.0 || 4.16.3",
        "express": "2.0.0 || >3.0.0 <4.16.3",
        // 任意版本
        "express": "*",
    },
    // 项目在开发和测试环境中依赖的包
    "devDependencies": {
        "express": "^4.16.3"
    },
    // 指定node或者npm的版本
    "engines": {
        "node": ">= 4.0.0",
        "npm": ">= 3.0.0"
    }
    // 开源许可协议
    "license": "ISC"
}

```

::: tip
关于版本号x.y.z;其中，
* x是主版本号
* y是次要版本号，y升级时代表一次功能升级，但是该功能向下兼容
* z是修复版本号，当y升级有bug被修复时，升级该版本号
:::

[更多详情：](https://docs.npmjs.com/files/package.json)