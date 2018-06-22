#!/usr/bin/env bash
# -*- encoding UTF-8 -*-

# set env
export PGRDIR=$(cd `dirname $0`; pwd)
export WORKSPACE=$PGRDIR/../../

# docker build
# build image should't remove docker container , moved the step to run_docker.sh.
docker build -t my-blog-server $WORKSPACE