### Vscode
---------

#### 快捷键 Mac

* `command + p`
	* `main.js` 输入文件夹名称，全局搜索文件命令框
	* `?` 显示当前可以执行的动作
	* `: 33` 跳转到第33行
	* `@ app` 跳转到app函数或者方法

* 搜索
	* `command + f` 当前文件搜索
	* `command + shift + f` 全局搜索

* 代码格式
	* `command + [` `shift + table` 左边缩进 
	* `command + ]` `table` 右边缩进 
	* `option + shift + up/down` 向上向下复制一行
	* `command + X` 剪切当前行
	* `command + C` 复制当前行
	* `command + Delete` 删除当前行
	* `command + Enter` 向下插入一行
	* `command + shift + Enter` 向上插入一行
	* `option + shift + F` 格式化代码
	* `option + Up/Down` 上下移动行

* 光标位置和选中
	* `command + D` 选中下一个相同的值
	* `command + shift + L` 选中相同的值
	* `control + G` 跳转到行数
	* `option + shift + 拖动鼠标` 选中多个区域
	* `command + Up/Down` 文件夹开始,结束
	* `command + Left/Right` 行首,行尾
	* `command + shift + \` 光标跳转到括号末尾
	* `command + I` 选中当起行

* 编辑器与窗口
	* `command + N` 新文件
	* `command + W` 关闭当前tab
	* `command + shift + N` 新窗口
	* `command + shift + W` 关闭窗口
	* `command + option + Left/Right` 切换tab

#### 前端常用插件
* `ESLint` 语法检查
* `TSLint` TS语法检查
* `vue` vue开发
* `Auto Close Tag` 自动添加HTML / XML关闭标签
* `Auto Rename Tag` 自动重命名配对的HTML / XML标签
* `Bracket Pair Colorizer` 颜色识别匹配括号
* `Beautify` 格式化代码
* `Code Runner` 能够运行多种语言的代码片段或代码文件,安装完成后，右上角会出现：▶
* `filesize` 在底部状态栏显示当前文件大小，点击后还可以看到详细创建、修改时间
* `HTML Snippets` 代码自动填充
* `Image Preview` 鼠标移到路径里显示图像预览
* `JavaScript (ES6) code snippets` es6代码片段
* `Node.js Modules Intellisense` 可以在导入语句中自动完成JavaScript / TypeScript模块
* `Path Intellisense` 路径自动补全
* `vscode-fileheader` 顶部注释模板，可定义作者、时间等信息，并会自动更新最后修改时间;快捷键: Ctrl+Alt+i (默认信息可在 文件→首选项→设置 中修改)

#### Vscode 遇到的问题
* 问题：Mac中，由 Vscode 引出的`code helper`进程占用内存过高
解决办法: 打开vscode的配置文件，添加以下代码排除代码

``` json
{
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/tmp": true,
        "**/node_modules": true,
        "**/bower_components": true,
        "**/dist": true
    },
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/.git/subtree-cache/**": true,
        "**/node_modules/**": true,
        "**/tmp/**": true,
        "**/bower_components/**": true,
        "**/dist/**": true
    }
}
```
