---

templateKey: 'blog-post'
title: '메인넷 스텔라 분석'
date: 2019-02-23T10:24:53.100Z
description: >-
  메인넷 스텔라 분석
tags:
  - 메인넷
  - stellar
---


# Stellar

스텔라(Stellar)](https://www.stellar.org/)는 블록체인 기반의 금융 프로토콜로, 리플(Ripple)에서 분기해 나와 이제는 독립한 체인이다. 리플을 설립한 Jed McCaleb이 리플에서 나오면서, 설립한 또 다른 기업이다. 2014년 런칭 당시에는 리플 코드를 그대로 가져다 쓰다가, 2015년 4월 독립된 코드베이스를 통해 리플로부터 온전히 분기해 나오게 된다. 소규모 이체나 개인 간 이체에 중점을 두고 있다.

스텔라는 PBFT의 탈중앙화된 버전[(Stellar Consensus Protocol)](https://www.stellar.org/papers/stellar-consensus-protocol.pdf)을 사용한다. 리플은 합의 구조에 선택된 일부만이 참여할 수 있다면, 스텔라는 쿼럼 배치(quorum configuration)을 다운받은 모두가 합의 구조에 참여할 수 있다.

리플과 스텔라는 동일한 게이트웨이 시스템을 가진다. 이를 통해, 거래소나 은행 등의 신뢰 주체가 [게이트웨이](https://ripple.com/build/gateway-guide/)로써 네트워크에 연결된다. 이렇게 게이트웨이 시스템 자체가 신뢰 주체들의 지급 능력 및 의지에 의존하는 방식으로 작동한다.

특징 :  C++14, SCP, Herder, 게이트웨이, 금융결제, 오버레이, History, xdr, docker



 

## 암호화 알고리즘

Sodium 라이브러리를 사용하여 암복호화를 하고 있다. (<https://github.com/jedisct1/libsodium>)

내부적으로는 Ed25519 알고리즘을 사용하고 있으며 이는 elliptic-curve signatures를 확장해서 사용하고 있다.
(<https://ed25519.cr.yp.to/>)

계정정보와 키를 DB에 저장하고 있으며 DB는 sqllite와 postgres를 지원한다.





## 인터페이스

Horizon 서버를 통해서 Rest API와 SDK를 제공한다.

이를 통해서 웹, 모바일에서 스텔라의 코어 네트워크와 통신을 하도록 하고 있다. (Client 사이드에 설치가 됨)

go, java, javascript를 지원하고 있고 앞으로 늘려갈 계획이라고 한다.

![Stellar Ecosystem](https://www.stellar.org/wp-content/uploads/2016/06/Stellar-Ecosystem-v031.png)

 



## 원장

원장 블록의 헤더는 약 12개의 데이터로 (살짝 많은) 정보를 저장하고 있다.

원장은 4개의 엔트리로 구성이 되어 있다.

 

원장 모듈 :     
1) 외부에서 tx set을 받는다.
2) 마지막 원장에 해당 셋을 적용한다.
3) 변경된 엔트리들을 BucketList에 보냅니다.
4) 변경된 엔트리들을 SQL에 저장합니다.
5) 원장 해시 및 헤더를 SQL에 저장합니다.
6) 새로운 원장블록 해시와 tx 세트를 History에 보냅니다.
7) 새로운 원장블록 해시와 헤더를 Herder에 전송합니다.


네트워크 따라잡기 :
1) SCP를 위해서 네트워크가 현재 활성화되었는지 알려주기를 기다립니다.     
2) 히스토리 아카이브에서 히스토리 로그 또는 정적 델타를 가져옵니다.     
3) 캐치 업 모드에 따라 델타 재생 또는 강제 적용을 합니다.

 

블록 헤더는 DB에 레져로 저장하고 헤더를 포함한 전체 데이터는 HAS형태로 DB에 저장한다.





## 참조

공식사이트 : <https://www.stellar.org/>

오픈소스 : <https://github.com/stellar/stellar-core>

스텔라 합의알고리즘 paper : <https://www.stellar.org/papers/stellar-consensus-protocol.pdf>

개발자 문서 : <https://www.stellar.org/developers/guides/get-started/index.html>

# Mainnet Analysis Report

블록비전의 내부에서 진행하고 있는 메인넷 분석 보고서를 기술 블로그를 통해서 공유하고 있습니다. 현재 존재하는 메인넷들의 소개와 특징들을 위주로 하여 이해하기 쉽고 기술적인 다양성들을 한눈에 볼 수 있도록 하기 위합니다.


다양한 메인넷들에 대한 정보들을 공유하기 위하여 오픈합니다. 참여를 원하시는 분들은 언제든지 공헌자가 되어 함께 만들어 갈 수 있습니다.

# 커뮤니티

블록체인 코어개발 카톡오픈방 : <https://open.kakao.com/o/gQDSHGM>