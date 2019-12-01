### 日常配置文件
-------
默认配置文件
``` sh
#运行用户
#user  nobody;
#启动进程,通常设置成和cpu的数量相等
worker_processes  1;

#全局错误日志存放位置
#错误日志级别：常见的错误日志级别有[debug | info | notice | warn | error | crit | alert | emerg]
# 注意：不要配置info等级较低的级别，会带来大量的磁盘I/O消耗
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid(进程标识符)存放路径。
#pid        logs/nginx.pid;

events {
  #单个后台worker process进程的最大并发链接数
  worker_connections  1024;
}


http {
  #设定mime类型,类型由mime.type文件定义
  include       mime.types;
  default_type  application/octet-stream;

  #设定日志格式
  #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  #                  '$status $body_bytes_sent "$http_referer" '
  #                  '"$http_user_agent" "$http_x_forwarded_for"';

  #access_log  logs/access.log  main;

  #指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，
  #对于普通应用，必须设为 on
  #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，
  #以平衡磁盘与网络I/O处理速度，降低系统的uptime.
  sendfile        on;
  #tcp_nopush     on;

  #连接超时时间
  keepalive_timeout  65;

  #开启gzip压缩
  #gzip  on;

  #设定虚拟主机配置
  server {
    #侦听80端口
    listen       8080;
    #定义使用 localhost访问
    server_name  localhost;

    #charset koi8-r;

    #设定本虚拟主机的访问日志
    #access_log  logs/host.access.log  main;

    location / {
      #定义服务器的默认网站根目录位置
      root   html;
      #定义首页索引文件的名称
      index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
  }


  # another virtual host using mix of IP-, name-, and port-based configuration
  #
  #server {
  #    listen       8000;
  #    listen       somename:8080;
  #    server_name  somename  alias  another.alias;

  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}


  # HTTPS server
  #
  #server {
  #    listen       443 ssl;
  #    server_name  localhost;

  #    ssl_certificate      cert.pem;
  #    ssl_certificate_key  cert.key;

  #    ssl_session_cache    shared:SSL:1m;
  #    ssl_session_timeout  5m;

  #    ssl_ciphers  HIGH:!aNULL:!MD5;
  #    ssl_prefer_server_ciphers  on;

  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}
  include servers/*;
}

```