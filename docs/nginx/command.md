### 日常命令
-------

#### 日常命令
``` sh
#打开 nginx
nginx

#测试配置是否有语法错误
nginx -t

#重新加载
nginx -s reload

#重启
nginx -s reopen

#停止
nginx -s stop

#推出 
nginx -s quit
```

#### 命令规则
```
nginx [-?hvVtq] [-s signal] [-c filename] [-p prefix] [-g directives]
-?,-h : 打开帮助信息
-v : 显示版本信息并退出
-V : 显示版本和配置选项信息，然后退出
-t : 检测配置文件是否有语法错误，然后退出
-q : 在检测配置文件期间屏蔽非错误信息
-s signal : 给一个 nginx 主进程发送信号：stop（停止）, quit（退出）, reopen（重启）, reload（重新加载配置文件）
-p prefix : 设置前缀路径（默认是：/usr/local/Cellar/nginx/1.2.6/）
-c filename : 设置配置文件（默认是：/usr/local/etc/nginx/nginx.conf）
-g directives : 设置配置文件外的全局指令
```

#### 制定配置文件
```
nginx -c /usr/local/nginx/conf/nginx.conf
```