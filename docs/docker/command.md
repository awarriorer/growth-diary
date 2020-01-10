# Docker 日常命令

## Docker 服务

* 启动 `sudo service docker start`
* 重启 `sudo service docker restart`
* 停止 `service docker stop`

## Dockerfile 基础语法

``` sh
# 这里是注释！

# 基础镜像
FROM

# 维护人，以及维护人email
MAINTAINER

# 环境变量
ENV

# 复制文件到container里面，同时还有一个copy指令，区别：add 可以直接复制完成后解压, add url (空格) tourl
ADD

# 执行命令
RUN

# 安装进程管理工具
RUN pip install supervisor

# 把container的22端口和宿主机进行映射
EXPOSE

# container每次启动的时候，要执行的命令。注意：可以写多条，但是只要最后一条起作用
ENTRYPOINT 
```

## 镜像

``` md
# 制作镜像
docker build -t youerImageName DockerfileUrl

# 搜索镜像
docker search imageName

# 下载镜像
docker pull imgageName

# 查看镜像
docker images

# 删除镜像
docker rmi dockerName|imageId
```

## 容器

``` md
# 创建容器
docker run [OPTIONS] IMAGE[:TAG] [COMMAND] [ARG...]
docker run -it -d --name=youreName imageName

# 查看容器日志
sudo docker logs -f --tail number containerID
docker logs --follow containerID

# -d 后台运行容器，并返回容器ID
# -i 以交互模式运行容器，通常与 -t 同时使用
# -t 为容器重新分配一个伪输入终端，通常与 -i 同时使用
# --name="nginx-lb" 为容器指定一个名称
# --dns 8.8.8.8 指定容器使用的DNS服务器，默认和宿主一致
# -h "mars" 指定容器的hostname
# -e username="ritchie" 设置环境变量
# --env-file=[] 从指定文件读入环境变量
# -p 1122:3344 宿主机端口对应容器端口

# 进入容器
docker exec -it [containerID] /bin/bash

# 退出容器
exit

```

## 批量操作命令

``` md
# 启动所有未启动容器
docker start $(docker ps -a | awk '{ print $1}' | tail -n +2)

# 关闭所有容器
docker stop $(docker ps -a | awk '{ print $1}' | tail -n +2)

# 删除所有容器
docker rm $(docker ps -a | awk '{ print $1}' | tail -n +2)

# 删除所有镜像
docker rmi $(docker images | awk '{print $3}' |tail -n +2)
```