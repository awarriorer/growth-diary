### Git 日常命令

* [最简流程开发](#最简流程开发)
* [增加/删除文件](#增加/删除文件)
* [分支命名规范](#分支命名规范)
* [分支管理命令](#分支管理命令)
* [撤销回滚](#撤销回滚)
* [子模块](#子模块)
* [添加多个远程仓库](#添加多个远程仓库)
* [Tag](#Tag)
* [查看信息](#查看信息)
* [文件忽略](#文件忽略)
* [用户配置](#用户配置)
* [密钥配置](#密钥配置)
* [多密钥配置](#多密钥配置)

#### 最简流程开发
``` sh
# 克隆项目
git clone project_url

# 创建自己的分支
git branch branchName

# 查询状态
git status

# 把所有更新的添加到监控队列
git add -A

# 提交到本地暂存区
git commit -m '描述说明'

# 把仓库代码跟新到本地
git pull origin branchName

# 把本地代码推送到远程仓库
git push origin branchName
```

#### 增加/删除文件
``` sh
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 添加所有目录的所有文件到暂存区
git add -A

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
git add -p

# 删除工作区文件，并且将这次删除放入暂存区,删除本地文件
git rm -f [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区,不删除本地文件
git rm -f --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```

#### 分支命名规范
分支的命名的格式: `$type/$version/$name/$userName`,其中参数含义分别为
* $type: 分支类型
    * 功能分支: feature, 基于develop分支,最终合并到develop分支
    * 预发布分支: release, 基于develop分支,最终合并到master分支
    * BUG分支: fixbug, 基于develop,最终合并到develop分支
    * 线上BUG热修复: hotfix, 基于master分支,最终合并到master分支
    * 重构分支: refactor, 基于master分支
* $version: 分支版本
* $name: 分支的名称，简要描述
* $userName: 分支创建人

#### 分支管理命令
``` sh
# 查看本地分支
git branch

# 查看远程分支
git branch -r

# 查看所有分支(本地分支和远程分支)
git branch -a

# 获取远程分支
git branch fetch

# 创建分支
git branch branchName

# 创建指定commitId分支
git branch branchName commitId

# 切换分支
git checkout branchName

# 删除本地分支
git branch -D branchName

# 删除远程分支
git push origin :branchName
git push origin --delete branchName

# 合并指定分支到当前分支
git merge [branch]
```

#### 撤销回滚
``` sh
# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
git checkout .

# 回滚到上一个版本
git reset --hard HEAD~1

# 回到某一个commitId对应的版本
git reset --hard commitId

# 本地回滚到某一版本后，将远程仓库也回滚到这一版本
git push origin branchName -f

# 强制恢复到远程分支,本地修改将被忽略
git reset --hard origin/branchName

# 回滚到上一次提交
git revert HEAD

# 回滚到某一次commitID
git revert -n commitId

# 然后再push
git push origin branchName
```
::: tip
reset(回退)和revert(反做)的区别在于：
* 执行reset命令后，目标版本后的版本将会被删除，减法操作
* 执行revert命令时，是在目标版本创建出一个新的版本，这个版本和想要回退的版本一样。加法操作
:::


#### 子模块
``` sh
# 如果是原来的项目中有子模块
# 初始化
git submodule init 
# 更新
git submodule update
# 或者执行
git submodule update --init --recursive

# 添加子模块
git submodlue add [远程路径] 本地路径

# git 删除子模块 1)
Git rm --cached  -r [path]

# 根据路径删除子模块的记录
# 2) 清理子模块配置,编辑“.gitmodules”文件，将子模块的相关配置节点删除掉,
# 3) 编辑“ .git/config”文件，将子模块的相关配置节点删除掉
# 4) 手动删除子模块残留的目录
```

#### Tag
``` sh
# 查看tag 
git tag

# 创建tag
git tag -a v1.0 -m "1.0稳定版本"

#切换tag
git checkout v1.0.0

#删除标签
git tag -d v1.0.0

#推送tag
git push origin v1.0.0
```

#### 添加多个远程仓库
``` sh
# 查看当前源
git remote
# 查看当前源地址
git remote get-url origin
# 设置当前源的地址
git remote set-url origin https://github.com/xxx(新的仓库地址)
# 添加github
git remote add origin https://github.com/xxx(仓库地址)
# 添加oschina
git remote add oschina https://git.oschina.net/xxxx(仓库地址)
# 提交到oschina
git push oschina master(分支名)
# 提交到github
git push origin master(分支名)
# 从oschina更新
git pull oschina master
# 从github更新
git pull origin master
```

#### 查看信息
``` sh
# 显示有变更的文件
git status

# 显示当前分支的版本历史
git log

# 显示commit历史，以及每次commit发生变更的文件
git log --stat

# 搜索提交历史，根据关键词
git log -S [keyword]

# 显示暂存区和工作区的差异
git diff

# 显示暂存区和上一个commit的差异
git diff --cached [file]

# 显示两次提交之间的差异
git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
git show [commit]
```

#### 文件忽略
在项目根目录下，创建`.gitignore`文件，在里面配置git需要忽略的文件，如
```
node_modules/
dist/
```
强制添加文件到监听队列
``` sh
git add -f dist
```

#### 用户配置
``` sh
# 显示当前git配置
git config --list

# 编辑git配置文件
git config -e [--global]

# 设置提交代码时用到的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```
#### 密钥配置
1. 查看是否已经有了ssh密钥,如果没有密钥则不会有此文件夹，有则备份删除
``` sh
cd ~/.ssh
```
2. 生存密钥
``` sh
ssh-keygen -t rsa -C test@email.com
```
按3个回车，密码为空。
``` sh
Your identification has been saved in /home/tekkub/.ssh/id_rsa.
Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.
The key fingerprint is:
………………
```
最后得到了两个文件：id_rsa和id_rsa.pub

3. 添加密钥到ssh：ssh-add 文件名,需要之前输入密码
4. 在github上添加ssh密钥，这要添加的是`id_rsa.pub`里面的公钥。打开[https://github.com/](https://github.com/),登陆，然后添加ssh
5. 测试是否成功
``` sh
ssh -T git@github.com
```

#### 多密钥配置
当有多个git账号的时候，比如一个github，用于自己进行一些开发活动，再来一个gitlab，一般是公司内部的git。这两者你的邮箱如果不同的话，就会涉及到一个问题，生成第二个git的key的时候会覆盖第一个的key，导致必然有一个用不了

1. 生成密钥
``` sh
ssh-keygen -t rsa -C new@email.com
```
2. 上方命令执行后，会让你输入新密钥的名称
``` sh
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/*/.ssh/id_rsa): id_rsa_new
```
3. 把新的密钥添加到对应的平台
4. 在`./.ssh`下创建`config`配置文件，配置以下内容
``` sh
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_old
User name

# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_new
User name
```
5. 测试
``` sh
ssh -T git@github.com
```

#### 合并commit
从HEAD版本开始往过去数3个版本
```
git rebase -i HEAD~3
```
指名要合并的版本之前的版本号
``` sh
git rebase -i commitId
```
执行后，会进入vim窗口，执行`:%s/pick/s/g`后，把第一行的`s`改为`pick`,修改文案，保存推出

推送到服务器
``` sh
git add -A
git rebase --continue  
git push origin branchName -f
```

放弃本次压缩合并
``` sh
git rebase --abort  
```