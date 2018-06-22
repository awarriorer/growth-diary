# VERSION 0.1
# DOCKER-VERSION  0.1.0
# AUTHOR:         uncle-yang
# DESCRIPTION:    Image with uncle-yang web project
# TO_BUILD:       docker build -t cc/deal-admin-server .
# TO_RUN:         docker run -P cc/deal-admin-server

# Latest Ubuntu LTS
FROM mhart/alpine-node:6.12.0

# Install cnpm
RUN npm config set unsafe-perm true
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# 把项目复制进容器
COPY . /home/my-blog/

# 安装依赖包
RUN cd /home/my-blog/ && \
    cnpm install -d

# 全局安装vuepress
RUN cnpm install -g vuepress

# Workdir
WORKDIR /home/my-blog/

# 打包动作
RUN cd /home/my-blog/ && \
	vuepress build docs

# Enterport
ENTRYPOINT []

# 启动时执行的命令
#CMD nginx && node ./server.js

CMD node ./server.js
