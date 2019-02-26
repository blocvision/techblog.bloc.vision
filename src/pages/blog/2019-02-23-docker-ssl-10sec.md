---

templateKey: 'blog-post'
title: '초간단 도커 Let's Encrypt SSL 설치'
date: 2019-02-25T15:24:53.100Z
description: >-
  초간단 도커 Let's Encrypt SSL 설치
tags:
  - ssl
  - docker
---

인증서를 받을 웹서버에서 ... 디렉토리와 도메인 수정하시고~

```bash
docker run -it --rm --name certbot \
  -v '/etc/letsencrypt:/etc/letsencrypt' \
  -v '/var/lib/letsencrypt:/var/lib/letsencrypt' \
  certbot/certbot certonly -d '*.yourdomain.com' --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory
```

Y

TXT 값은 DNS record에 넣고

dig -t txt _acme-challenge.example.com
으로 확인하고

엔터

끝

/etc/letsencrypt/live/ 아래에 가보면 생성~


웹서버에 반영해서 시작~~

##인증서 갱신

```bash
docker run -it --rm --name certbot \
  -v '/etc/letsencrypt:/etc/letsencrypt' \
  -v '/var/lib/letsencrypt:/var/lib/letsencrypt' \
  certbot/certbot certonly renew --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory
```




