(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),l=a.n(o),s=a(157),c=a(189),i=a(4),d=a.n(i),m=a(159),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return l.a.createElement("div",{className:"columns is-multiline"},e&&e.map(function(e){var t=e.node;return l.a.createElement("div",{className:"is-parent column is-6",key:t.id},l.a.createElement("article",{className:"tile is-child box notification"},l.a.createElement("p",null,l.a.createElement(m.Link,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),l.a.createElement("span",null," • "),l.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date)),l.a.createElement("p",null,t.excerpt,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.Link,{className:"button",to:t.fields.slug},"Keep Reading →"))))}))},t}(l.a.Component);p.propTypes={data:d.a.shape({allMarkdownRemark:d.a.shape({edges:d.a.array})})};var u=function(){return l.a.createElement(m.StaticQuery,{query:"415849508",render:function(e,t){return l.a.createElement(p,{data:e,count:t})},data:c})};a.d(t,"default",function(){return b});var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(s.a,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('/img/blog-index.jpg')"}},l.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},"Latest Stories"))),l.a.createElement(u,null))))},t}(l.a.Component)},189:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Stellar 스텔라(Stellar)]( https://www.stellar.org/ )는 블록체인 기반의 금융 프로토콜로, 리플(Ripple)에서 분기해 나와 이제는 독립한 체인이다. 리플을 설립한 Jed McCaleb이 리플에서 나오면서, 설립한 또 다른 기업이다. 2014년 런칭 당시에는 리플 코드를 그대로 가져다 쓰다가, 2015년 4월 독립된 코드베이스를 통해 리플로부터 온전히 분기해 나오게 된다. 소규모 이체나 개인 간 이체에 중점을 두고 있다. 스텔라는 PBFT의 탈중앙화된 버전 (Stellar Consensus Protocol) 을 사용한다. 리플은 합의 구조에 선택된 일부만이 참여할 수 있다면, 스텔라는 쿼럼 배치(quorum configuration…",id:"a53f75cc-1129-54c6-b6e2-4e387f34d467",fields:{slug:"/blog/2019-02-23-mainnet-stellar/"},frontmatter:{title:"메인넷 스텔라 분석",templateKey:"blog-post",date:"February 23, 2019"}}},{node:{excerpt:"ZCASH 제트캐시의 창시자인 주코 윌콕스는 IT 보안 전문가로서 활동해왔습니다. \n제트캐시라고 불리는 ZCASH 는 따라서 보안과 매우 밀접한 관련이 있습니다. \nZCASH가 사용하는 알고리즘은 영지식 증명(zero-knowledge proof…",id:"59af27d5-da1b-5065-8a9c-242691e4a17a",fields:{slug:"/blog/2019-02-23-mainnet-zcash/"},frontmatter:{title:"Zcash 영지식증명 분석",templateKey:"blog-post",date:"February 23, 2019"}}},{node:{excerpt:"개요 이미 협업하기로 한 조직간에 데이터를 공유하고자 할때 사용 블록체인 고유의 진위여부 합의알고리즘 같은 건 없음. 트렌젝션 진행 전과정을 합의라고 우김. ^ 트렌제션 실행 -> 오더링 -> 검증 -> 반영 구축순서 1. 피어 각 피어는 분산원장과 체인코드를 기본적으로 가진다. 하나의 피어는 복수개의 분산원장과 체인코드를 가진다. 하나의 체인코드는 다수개의 분산원장에 접근할 수 있다. 체인코드를 통해서 분산원장에 접근한다. (직접원장에 접근은 권장하지 않음.) 2. Dapp Dapp 은 SDK…",id:"3334134a-8d79-51d0-850e-e6164cdd339f",fields:{slug:"/blog/2019-02-12-hyperledger-fabric12-summary/"},frontmatter:{title:"하이퍼레저 패브릭 1.2 컨셉요약",templateKey:"blog-post",date:"February 12, 2019"}}},{node:{excerpt:"끝 ! ~ 클라이언트 접속 됨.~ 아이디/비번 없음. 클라이언트는 : mongodb compass community 로 ~\n https://www.mongodb.com/download-center/compass?jmp=hero 편의상 윈도우용\nmongodb-compass-community-1.16.3-win32-x64.exe 컨테이너 내부에 들어가 보려면 ? os 확인  ",id:"6525e44a-f82c-578c-9ea2-6469fac6f834",fields:{slug:"/blog/2019-02-11-docker-mongodb-10sec/"},frontmatter:{title:"초간단 도커 mongodb 설치",templateKey:"blog-post",date:"February 11, 2019"}}},{node:{excerpt:"끝 ! ~ 클라이언트 접속 됨.~ 컨테이너 내부에 들어가 보려면 ? os 확인  ",id:"3e3ad935-44de-59dc-b2e0-00943d670086",fields:{slug:"/blog/2019-02-10-docker-mysql-10sec/"},frontmatter:{title:"초간단 도커 mariadb 설치",templateKey:"blog-post",date:"February 10, 2019"}}},{node:{excerpt:"폴더만들어 지면서,... pug 템플릿 익스프레스 기본구조가 만들어짐. npm start 하면 서버실행 ! http://localhost:3000   nodejs 를 활용하여 미들웨어 서버로 만들기 좋습니다.",id:"8bdd2384-d465-57c8-ac16-efb69667d7ce",fields:{slug:"/blog/2019-02-10-nodejs-express-pug/"},frontmatter:{title:"노드-익스프레스-pug 초간단 설치",templateKey:"blog-post",date:"February 10, 2019"}}},{node:{excerpt:"npmtest 만들어보기",id:"d0eaa464-b86e-55dc-9765-ce7083f1ed20",fields:{slug:"/blog/2019-02-08-npm-opensource-deploy/"},frontmatter:{title:"노드패키지 오픈소스배포 테스트",templateKey:"blog-post",date:"February 08, 2019"}}},{node:{excerpt:"Hycon 테스트 하이콘 0.2.1 을 다운받아 테스트를 해 보니, 지갑송금이 안됨. (하루 삽질).\n보안상 0.2 로 하드포크가 필요했나 봅니다.\n테스트는 더 낮은 버전으로 실행 해 봄. 깃허브에 올려놓았으며,   blocvision/hycon-core-v01 \n개선점을 찾게 되면, 오픈소스로 기여하거나, 에드온으로 개발하려고 합니다. ^^ 하이콘 테스트넷 가동 중.\n  hycontest.bloc.vision API  v1 기능요약 지갑만들기 (단일지갑과 HD…",id:"ac6ff9e8-2165-56c9-85d3-6dc5fc950455",fields:{slug:"/blog/2019-02-02-hycon-core-testrun/"},frontmatter:{title:"블록체인 하이콘 테스트 실행",templateKey:"blog-post",date:"February 03, 2019"}}},{node:{excerpt:"도커 설치하기 Win/Mac:  Get Started with Docker | Docker Ubuntu:  Get Docker CE for Ubuntu | Docker Documentation 버전체크 도커정보 테스트도커 hello-world 컨테이너 도커허브에 있는 nginx 이미지 이용하기 nginx 직접만들기 도커이미지 빌드하기 작업공간 만들기 index.html Dockerfile daemon off 로 실행해 도커프로세스가 죽지 않음. 백그라운드로 실행되면 도커프로세스가 끝남. 이미지생성 컨테이너 생성 컨테이너 중지 및 삭제 Container 삭제시 안의 내용도 모두 함께 삭제 파일공유 도커볼륨 클린업 Flask App Get Started, Part 2: Containers | Docker…",id:"a85b272d-cd16-5955-bb6a-477441cb7ae3",fields:{slug:"/blog/2019-02-01-docker-quickstart/"},frontmatter:{title:"도커 기본개념 잡기 퀵스타트",templateKey:"blog-post",date:"February 01, 2019"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-42cafea669e6ee5a4d42.js.map