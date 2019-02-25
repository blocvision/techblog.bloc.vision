---

templateKey: 'blog-post'
title: '초간단 도커 mariadb 설치'
date: 2019-02-10T15:24:53.100Z
description: >-
  초간단 도커 mariadb 설치
tags:
  - mysql 
  - docker
---


```bash
docker run -p 3306:3306--name mariadb-nodejs -e MYSQL_ROOT_PASSWORD=root -d mariadb
```

끝 ! ~ 클라이언트 접속 됨.~

컨테이너 내부에 들어가 보려면 ?

```bash
docker exec -it mariadb-nodejs bash
```

os 확인  

```bash
more /etc/os-release
```

