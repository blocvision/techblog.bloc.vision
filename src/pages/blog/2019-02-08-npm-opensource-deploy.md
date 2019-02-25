---

templateKey: 'blog-post'
title: '노드패키지 오픈소스배포 테스트'
date: 2019-02-08T10:24:53.100Z
description: >-
  노드패키지 오픈소스 간략 배포테스트
tags:
  - nodejs
  - npm
---


## npmtest 만들어보기


```bash
mkdir npmtest
cd npmtest
npm init

패키지이름 : 
.
.
.
{
  "name": "npmtest-7777",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "GoodPlanner",
  "license": "MIT"
}

package.json 생성됨.

npm install express
종속관계 모두 설치됨.

npm install express --save-dev 
 
...

npm adduser 
로그인

npm whoami 로그인된 계정

npm install --global npm (npm 자체재설치 ) --global 은 보통 명령라인 실행 패키지 설치


배포전, 버전수정하기 
package.json 직접정 또는 명령어
npm version 1.0.1  
npm version patch
npm version minor 
npm version major 

package.json
{
  "name": "npmtest-7777",
  "version": "1.0.2",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "GoodPlanner",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {
    "express": "^4.14.0"
  }
}


index.js
module.exports = () => {
    return 'hello package';
}


공개하기
npm publish

npm search mpmtest-7777 있는지 검색해 보기
npm info npmtest-7777 


삭제하기
npm unpublish (단, 24시간 이내만 삭제 가능. 그 이후는 삭제불가)
npm unpublish npmtest-7777 --force

unpublish 가 안될때는 ? help 센터에 ~~


```




