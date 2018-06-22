#!/usr/bin/env bash
# -*- encoding UTF-8 -*-

# clean old docker
docker rm -f my-blog-server

# docker run container
# docker run -it -d -e WEB_BASE_SYSTEM="release" --name="web-server" -p 8080:1122 web-server
docker run -it -d --name="my-blog-server" --expose=8009 my-blog-server