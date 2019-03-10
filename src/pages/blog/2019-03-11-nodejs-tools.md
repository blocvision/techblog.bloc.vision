---

templateKey: 'blog-post'
title: 'nodejs tools'
date: 2019-03-11T15:04:10.000Z
description: >-
  nodejs tools
tags:
  - nodejs  
---

## Nodejs Tools

* nodemon : 소스 수정시 자동으로 서버를 재시작 - 개발환경시
* cross-env : .env 값을 적용하면서 node 실행시... 윈도우환경에서도 호환 - 프로덕션환경
* nvm(윈도우), n(Linux,Mac) : nodejs 버전환경 스위치
* pm2 : nodejs 멀티클러스터 실행 및 자동재시작
* winston : logging
* sequelize : mysql 등 SQL 대체 사용
* mongoose : mongodb 문법대체사용
* connect-redis : redis 를 활용한 세션정보저장
* helmet, hpp : 보안을 위해 단순호출
* pug : 간략한 UI templeate
* CLI 프로그램만들기
  * commander : CLI 프로그램 편리하게 개발
  * inquirer : 대화형
  * chalk : 콘솔컬러문자
* express
  * express-generator 
  * cookie-parser : 쿠키파싱
  * body-parser : 본문파싱 - express 4.x 부터 기본포함 .. (설치필요없음)
  * express-session : 메모리에 세션저장
  * connect-flash : 1회성 메세지
  * morgan : 
* passport, passport-local, passport-kakao, bcypt(비번암호화) : 로그인
* cors : CORS 처리,해결
* socket.io : 실시간 양방향 통신
* 

## Nodejs 활용개념

* REST API
  * 커멘드
    * get : 가져오기
    * post : 게시.등록
    * put : 전체를 바꾸거나, 대체하거나 하는 ... 배치성
    * patch : 부분데이터 수정
    * delete : 삭제
  * uuidv4 : 유일키
  * jsonwebtoken : 토큰을 만들어 줌. (서버인증을 위해)



## 기타

* 버전관리
  * major : 대규모변화
  * minor : 신기능
  * patch : 버그픽스



