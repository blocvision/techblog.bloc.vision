---

templateKey: 'blog-post'
title: '도커 기본개념 잡기 퀵스타트'
date: 2019-02-01T15:04:10.000Z
description: >-
  도커의 기본적인 개념을 잡기 위한 퀵스타트 입니다.
tags:
  - 도커
---

## 도커 설치하기

- Win/Mac: [Get Started with Docker | Docker](https://www.docker.com/get-started)
- Ubuntu: [Get Docker CE for Ubuntu | Docker Documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

### 버전체크

```bash
$ docker --version
Docker version 18.09.1, build 4c52b90
```

### 도커정보

```bash
$ docker info
Containers: 3
 Running: 1
 Paused: 0
 Stopped: 2
...
```

## 테스트도커

### hello-world

```bash
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
...
Hello from Docker!
This message shows that your installation appears to be working correctly.
...

$ docker image ls
REPOSITORY                                  TAG                 IMAGE ID            CREATED             SIZE
hello-world                                 latest              fce289e99eb9        2 weeks ago         1.84kB

$ docker ps
$ docker container ls

$ docker ps -a
$ docker container ls --all
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS                     PORTS                                                                  NAMES
a304971ea41d        hello-world              "/hello"                 3 minutes ago       Exited (0) 3 minutes ago

$ docker rm a304971ea41d
a304971ea41d

$ docker rmi fce289e99eb9
Untagged: hello-world:latest
Untagged: hello-world@sha256:2557e3c07ed1e38f26e389462d03ed943586f744621577a99efb77324b0fe535
Deleted: sha256:fce289e99eb9bca977dae136fbe2a82b6b7d4c372474c9235adc1741675f587e
Deleted: sha256:af0b15c8625bb1938f1d7b17081031f649fd14e6b233688eea3c5483994a66a3

$ docker images
```

## 컨테이너

### 도커허브에 있는 nginx 이미지 이용하기

```bash
$ docker run --name nginx-test -p 8888:80 -d nginx
532c7de578f9de5e3b44a1a6554f80a7f5693aa3712bf3f21429acab8323db3c

$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                                  NAMES
e21c85565dd6        nginx               "nginx -g 'daemon of…"   14 seconds ago      Up 13 seconds       0.0.0.0:8888->80/tcp                                                   nginx

#############################
# open http://localhsot:8888
#############################

$ docker stop nginx-test
nginx-test

$ docker rm nginx-test
nginx-test
```

### nginx 직접만들기

```bash
$ docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
...

$ docker images
REPOSITORY                                  TAG                 IMAGE ID            CREATED             SIZE
ubuntu                                      latest              1d9c17228a9e        3 weeks ago         86.7MB

$ docker run --name nginx-test -p 8888:80 -it ubuntu /bin/bash

## In Container

# apt update
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [83.2 kB]
Get:2 http://archive.ubuntu.com/ubuntu bionic InRelease [242 kB]
...

# apt install -y nginx
Reading package lists... Done
Building dependency tree
Reading state information... Done
...

# service nginx start
 * Starting nginx nginx


#############################
# open http://localhsot:8888
#############################
```

## 도커이미지 빌드하기

### 작업공간 만들기

```shell
$ mkdir docker-study
```

index.html

```
Hello, Harry!!
```

### Dockerfile

```dockerfile
FROM ubuntu:latest

RUN \
  apt update && \
  apt install -y nginx

COPY ./index.html /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

daemon off 로 실행해 도커프로세스가 죽지 않음. 백그라운드로 실행되면 도커프로세스가 끝남.

### 이미지생성

```bash
$ docker build -t docker-test .
$ docker images
REPOSITORY                                  TAG                 IMAGE ID            CREATED             SIZE
docker-test                                 latest              1dac1bec3353        36 seconds ago      171MB
```

### 컨테이너 생성

```bash
$ docker run --name test -p 8888:80 -d docker-test
5d097cb5a6746a7c15963469f39d6ff278cb51dbc08fd689d28a26bd9e0ec19a

#############################
# open http://localhsot:8888
#############################
```

### 컨테이너 중지 및 삭제

```bash
$ docker stop test
test
$ docker rm test
test
```

Container 삭제시 안의 내용도 모두 함께 삭제

### 파일공유

```bash
$ mkdir html
$ pwd
/Users/harry/Work/docker-study
$ cat > html/index.html
I love Harry!

$ docker run --name test -p 8888:80 -v $(pwd)/html:/var/www/html -d docker-test
e6a082367faf679ef5cce512869281e3b2c6d2c70844c564659fe73cedb16dbb

#############################
# open http://localhsot:8888
#############################

$ cat > html/index.html
I love Harry, too!!

#############################
# open http://localhsot:8888
#############################

$ docker stop test
test
$ docker rm test
test
```

### 도커볼륨

```bash
$ docker volume create test-vol
test-vol

$ docker run --name test -p 8888:80 -v test-vol:/var/www/html -d docker-test
88f0e746280515faba4810a91dc16c702e6663a3fa7119f3cdbe6a28f8a8a321

$ docker exec -it test /bin/bash

# cat > /var/www/html/index.html
I love Harry!!!

#############################
# open http://localhsot:8888
#############################

# exit

$ docker stop test
test
$ docker rm test
test

### no use volume
$ docker run --name test -p 8888:80 -d docker-test

#############################
# open http://localhsot:8888
#############################

$ docker stop test
test
$ docker rm test
test

### use volume
$ docker run --name test -p 8888:80 -v test-vol:/var/www/html -d docker-test

#############################
# open http://localhsot:8888
#############################

$ docker stop test
test
$ docker rm test
test
```

### 클린업

```bash
$ docker ps
$ docker ps -a
$ docker images
$ docker rmi docker-test
$ docker volume list
$ docker volume rm test-vol
```

## Flask App

[Get Started, Part 2: Containers | Docker Documentation](https://docs.docker.com/get-started/part2/)

### 작업공간

```bash
$ mkdir flask;cd $_
$ pwd
/Users/harry/Work/docker-study/flask
```

requirements.txt

```
Flask
Redis
```

app.py

```python
from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
```

Dockerfile

```dockerfile
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

Files

```bash
$ ls
Dockerfile        app.py            requirements.txt
```

### Docker build

```bash
$ docker build —-tag=friendlyhello .
$ docker run -d -p 4000:80 friendlyhello
```

```
$ docker images
REPOSITORY TAG IMAGE ID CREATED SIZE
friendlyhello latest 91eb5f739d4c 6 days ago 131MB
python 2.7-slim f090c78858fa 4 weeks ago 120MB

파이썬 이미지에 스택하게 friendlyhello  가 올라가기 때문에 image 가 2개 생긴다.
```

### 도커컴포즈

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

docker-compose.yml

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "4000:80"
  redis:
    image: "redis:alpine"
```

yml 도 앞 공백문자 중요
도커컴포즈를 통해, 이미지도 빌드해 주고, 컨테이너로 실행까지 해준다.

```bash
$ docker-compose up -d
...
Creating flask_redis_1 ... done
Creating flask_web_1   ... done

$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
1f33e7c563c3        flask_web           "python app.py"          30 seconds ago      Up 29 seconds       0.0.0.0:4000->80/tcp   flask_web_1
581306d43d0f        redis:alpine        "docker-entrypoint.s…"   30 seconds ago      Up 29 seconds       6379/tcp               flask_redis_1

$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE
flask_web           latest              9aafb7983673        About a minute ago   131MB
python              2.7-slim            4620f1f365b9        2 days ago           120MB
redis               alpine              b42dc832c855        5 weeks ago          40.9MB

$ docker-compose ps
    Name                   Command               State          Ports
-----------------------------------------------------------------------------
flask_redis_1   docker-entrypoint.sh redis ...   Up      6379/tcp
flask_web_1     python app.py                    Up      0.0.0.0:4000->80/tcp

###
# Open http://localhost:4000
###


```
새로고침을 하면 Visits의 Counter가 증가한다.

```bash
$ docker-compose stop
Stopping flask_web_1   ... done
Stopping flask_redis_1 ... done

$ docker-compose ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES

$ docker-compose ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                        PORTS               NAMES
ff6f67658acf        flask_web           "python app.py"          34 seconds ago      Exited (137) 17 seconds ago                       flask_web_1
0b3119711cf0        redis:alpine        "docker-entrypoint.s…"   34 seconds ago      Exited (0) 27 seconds ago                         flask_redis_1

###
# Open http://localhost:4000
###

$ docker-compose start
Starting web   ... done
Starting redis ... done

$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                  PORTS                  NAMES
ff6f67658acf        flask_web           "python app.py"          56 seconds ago      Up Less than a second   0.0.0.0:4000->80/tcp   flask_web_1
0b3119711cf0        redis:alpine        "docker-entrypoint.s…"   56 seconds ago      Up Less than a second   6379/tcp               flask_redis_1

###
# Open http://localhost:4000
###
```

이전의 Counter에 이어서 계속 증가

```bash
$ docker-compose down
Stopping flask_web_1   ... done
Stopping flask_redis_1 ... done
Removing flask_web_1   ... done
Removing flask_redis_1 ... done
Removing network flask_default

$ docker-compose start
Starting web   ... done
Starting redis ... done
ERROR: No containers to start

# docker-compose up -d
Creating flask_redis_1 ... done
Creating flask_web_1   ... done

###
# Open http://localhost:4000
###
```

Visits Counter가 새롭게 시작함을 볼 수가 있다.

###  클린업

도커 컨테이너까지 삭제함.
데이터를 살리려면,.... 볼륨매칭해서 사용하면 됨.

```bash
$ docker-compose down
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```



수고하셨습니다.~








