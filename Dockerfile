# VERSION 0.1
# DOCKER-VERSION  0.1.0
# AUTHOR:         uncle-yang
# Latest Ubuntu LTS
FROM mhart/alpine-node:8.11.3

# Install cnpm
RUN npm config set unsafe-perm true
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# COPY
COPY . /home/my-blog/

# install
RUN cd /home/my-blog/ && \
    cnpm install -d

# install vuepress
RUN cnpm install -g vuepress

# Workdir
WORKDIR /home/my-blog/

# 打包动作
RUN cd /home/my-blog/ && \
	vuepress build docs

# Enterport
ENTRYPOINT []

# CMD run
CMD node ./server.js


