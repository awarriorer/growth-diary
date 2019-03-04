### EditorConfig
EditorConfig包含一个用于定义代码格式的文件和一批编辑器插件，这些插件是让编辑器读取配置文件并以此来格式化代码。

#### 常用配置
``` sh
# 是否是顶级配置文件，设置为true的时候才会停止搜索.editorconfig文件
root = true

# 规则适用范围
[*]
# 编码格式, "latin" | "utf-8" | "utf-8-bom" | "utf-16be" | "utf-16le"
charset = utf-8
# 缩进方式，"tab" | "space"
indent_style = space
# 缩进大小，
indent_size = 2
# 换行符类型，"lf" | "cr" | "crlf"
end_of_line = lf
# 是否让文件以空行结束
insert_final_newline = true
# 是否删除行尾空格
trim_trailing_whitespace = true

```
[详细配置](https://editorconfig.org/)

#### 配合使用插件
* [ESLint](https://cn.eslint.org/)

#### 支持的编辑器
![editors](./images/eritor.png)