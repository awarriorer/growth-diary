### 日常命令

``` sh
# 查看当前npm的版本
npm version
npm -v

# 初始化,引导创建package.json文件
npm init

# 搜索模块
npm search <module name>

# 安装模块到本地：如果package.json中没有配置版本的话，将默认安装最新版本
npm install <module name>
# 安装模块到本地：指定版本
npm install <module name>@version
# 安装到本地，且把模块配置到package.json中的dependencies
npm install --save
# 安装到本地，且把模块配置到package.json中的devDependencies
npm install --save-dev
# 安装模块到全局
npm install -g <module name>

# 更新模块
npm update <module name>

# 卸载模块
npm uninstall <module name>

# 查看已经安装的包
npm list

# 查看模块版本
npm list webpack

# 查看模块的信息
npm view webpack

# 查看某一项信息
npm view <module name> <label name>
npm view webpack version

# 查看当前目录安装的路径
npm root

# 查看全局目录安装的路径
npm root -g

# 清楚缓存
npm cache clear

# 更改包内容后进行重建
npm rebuild node-sass

# 检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新
npm outdate
```

#### 安装淘宝镜像
由于网络导致模块下载速度过慢，可以安装cnpm，且用cnpm下载模块
``` sh
# 安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 正常安装模块
cnpm install <module name>
```

#### npm包开发时用到的命令
``` sh
# 创建模块
npm init

# 让npm知道你时谁
npm addser

# 名称
Username: uncle-yang
# 密码
Password: *****
# 邮箱
Email: awarriorer@163.com

# 发布模块
npm publish

# 撤销发布
npm unpublish <package>@<version>
```

#### 模块调试
开发项目路径：`/path/project/my-object`

npm包项目路径：`/path/npm-project/my-utils`

``` sh
# 先去到模块目录，把它 link 到全局
cd /path/npm-project/my-utils
npm link

# 再去项目目录通过包名来 link
cd /path/project/my-object
npm link my-utils


# 还可以调试cli模块，
cd /path/npm-project/my-cli
npm link

# 此时，全局已经有my-cli指令了，
my-cli

# 去除link
npm unlink my-utils
```