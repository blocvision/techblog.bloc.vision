---

templateKey: 'blog-post'
title: '초간단 도커 Lets Encrypt SSL 설치'
date: 2019-02-26T15:04:10.000Z
description: >-
  초간단 도커 Lets Encrypt SSL 설치
tags:
  - ssl
  - docker
---

## 무료 웹서버SSL 사용

웹서버 만들고,.. SSL를 무료로 적용할때... 
간편하게 도커로 되어 있는 것을 사용해도 좋을 듯 ^ (이렇게도 활용할 수 있네요.)

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
