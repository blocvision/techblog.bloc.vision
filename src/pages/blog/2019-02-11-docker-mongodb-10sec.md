---

templateKey: 'blog-post'
title: '초간단 도커 mongodb 설치'
date: 2019-02-11T15:24:53.100Z
description: >-
  초간단 도커 mongodb 설치
tags:
  - mongodb
  - docker
---


```bash
docker run --name mongodb-nodejs -d -p 27017:27017 mongo --noauth --bind_ip=0.0.0.0
```

끝 ! ~ 클라이언트 접속 됨.~

아이디/비번 없음.

---

클라이언트는 : mongodb compass community 로 ~
https://www.mongodb.com/download-center/compass?jmp=hero

편의상 윈도우용
mongodb-compass-community-1.16.3-win32-x64.exe

---

컨테이너 내부에 들어가 보려면 ?

```bash
docker exec -it mongodb-nodejs bash
```

os 확인  

```bash
more /etc/os-release
```

