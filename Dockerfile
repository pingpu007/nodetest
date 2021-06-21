# FROM ubuntuL10.04
FROM ubuntu:18.04

RUN apt-get update
RUN ls /
# 1. Git clone Github App
# 2. Install node
# 3. npm build
# 4. serve -s build 