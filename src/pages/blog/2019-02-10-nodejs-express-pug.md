---

templateKey: 'blog-post'
title: '노드-익스프레스-pug 초간단 설치'
date: 2019-02-10T10:24:53.100Z
description: >-
  노드 익스프레스 pug 탬플릿 초간단 설치
tags:
  - nodejs
  - express
---


```bash
npm install —global express-generator
express express-server --view=pug
```

폴더만들어 지면서,... pug 템플릿 익스프레스 기본구조가 만들어짐.

```
express-server
│  app.js
│  package.json
│
├─bin
│      www
│
├─public
│  ├─images
│  ├─javascripts
│  └─stylesheets
│          style.css
│
├─routes
│      index.js
│      users.js
│
└─views
        error.pug
        index.pug
        layout.pug
```

npm start 하면 서버실행 !

http://localhost:3000 

nodejs 를 활용하여 미들웨어 서버로 만들기 좋습니다.










