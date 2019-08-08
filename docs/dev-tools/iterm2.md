### iterm2

#### 主题
* [下载iterm2](https://www.iterm2.com/)
* 安装`Oh my zsh`
``` sh
# curl 安装方式
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# wget 安装方式
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

```
* 安装`PowerLine`
``` js
pip install powerline-status --user

# 若没有pip，那么运行
# sudo easy_install pip
```
* 安装`PowerFonts`
``` sh

# git clone
git clone https://github.com/powerline/fonts.git --depth=1

# cd to folder
cd fonts

# run install shell
./install.sh
```
* 选择字体：`iterm2 -> Preferences -> Profiles -> Text`,在`Font`区域选中`Change Font`，然后找到`Meslo LG S for PowerLine`字体
* 安装配色方案
``` sh
cd ~/Desktop/OpenSource

git clone https://github.com/altercation/solarized

cd solarized/iterm2-colors-solarized/

open .
```
* 选择配色方案：`iTerm2 -> Preferences -> Profiles -> Colors -> Color Presets`
* 下载`agnoster`主题
``` sh
cd ~/Desktop/OpenSource

git clone https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor.git

cd oh-my-zsh-agnoster-fcamblor/

./install
```
* 编辑`zshrc`配置文件,将`ZSH_THEME`后面的字段改为`agnoster`
``` sh
vim ~/.zshrc
```

#### 常用快捷键
* 标签
    * 新建标签：`command + t`
    * 关闭标签：`command + w`
    * 切换标签：`command + 数字`或者`command + 方向`
    * 切换全屏：`command + enter`
    * 查找：`command + enter`
* 分屏
    * 垂直分屏：`command + d`
    * 水平分屏：`command + shift + d`
    * 切换屏幕：`command + [` 或者 `command + ]`，`command + option + 方向键`
    * 查看历史命令：`command + ;`
    * 查看剪贴板历史：`command + shift + h`
* 编辑
    * 清除当前行：`ctrl + u`
    * 到行首：`ctrl + a`
    * 到行尾：`ctrl + e`
    * 前进后退：`ctrl + f/b` (相当于左右方向键)
    * 上一条命令：`ctrl + p`
    * 搜索命令历史：`ctrl + r`
    * 删除当前光标的字符：`ctrl + d`
    * 删除光标之前的字符：`ctrl + h`
    * 删除光标之前的单词：`ctrl + w`
    * 删除到文本末尾：`ctrl + k`
    * 交换光标处文本：`ctrl + t`
    * 清屏1：`command + r`
    * 清屏2：`ctrl + l`