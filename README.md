# 리액트로 가계부 만들기

## 📍 과제 개요

1. react-router-dom 을 활용한 페이지 이동처리
2. styled-component 를 이용한 스타일링 적용
3. context api 를 이용한 전역 상태 관리
4. redux 를 이용한 전역 상태 관리

<br />

## 🔑 필수요구사항

1. 월별 지출 조회 및 항목 등록 기능 구현 (Home - Create/Read)
2. 지출 상세 화면 CRUD 구현 (Detail - 작성, 조회, 수정, 삭제)
3. useState, useEffect, useRef 사용
4. styled-components 를 이용하여 스타일링
5. react-router-dom 을 이용한 페이지 전환
6. Props Drilling → Context API → Redux
   - Redux ducks 패턴을 사용하지 않고 Redux Toolkits 을 사용

<br />

## 📌 선택요구사항

1. 모달 구현
   - window.alert 이나 window.confirm 대신 직접 구현한 모달을 적용
2. 월별 지출 Summary
3. 지출 데이터 정렬
4. src 폴더 기준 절대경로 설정

<br />

## ⏱ 기한

2024.05.20 ~ 2024.05.29

<br />

## 📖 학습 내용

1.  styled-components 는 CSS in JS 라이브러리 중 하나로 리액트 개발 시 자주 사용되는 방법입니다. 본인이 생각하는 styled-components의 장점과 단점을 말씀해 주세요.

        장점
         - GlobalStyle 컴포넌트로 전역 스타일링이 가능하다
         - props를 사용해 조건부 스타일링이 가능하며 동적으로 스타일 변경이 가능하다

        단점
         - class이름을 짓는 것과 마찬가지로 컴포넌트 명을 별도로 만들어야하므로 디버깅이 어려울 수 있다
         - 스타일이 런타임에 생성되어 성능에 영향을 줄 수도 있다

<br />

2.  props-drilling으로 전체를 먼저 구현하신 다음 context api와 redux로 리팩터링해서 전역 상태 관리를 경험해 보셨습니다. 어떤 상태들을 전역 상태로 관리하셨나요? context나 redux로 전역상태를 관리해봤을 때 어떤 문제를 해결해준다고 느끼셨나요?

        제출된 지출데이터와 버튼 클릭 시 선택된 월을 전역 상태로 관리했다.

        Props Drilling의 단점
         - 복잡성 증가 : 중간 컴포넌트들이 데이터 전달 이외에 다른 역할을 하지 않는 경우 불필요하게 코드가 복잡해진다.
         - 유지보수 어려움 : 상태 변경 시 디버깅이 어렵다.

        Context API와 Redux 사용 시 Props Drilling의 단점을 해결할 수 있는데, 중앙 집중식 상태 관리를 통해 코드 유지보수가 비교적 용이해진다. 또한 중복된 코드가 줄어 가독성이 좋아진다.

<br />

3.  지출을 등록/수정 하는 과정에서 useState 와 useRef 를 둘다 사용해봤는데요. 각각 언제 사용하면 좋을 지에 대한 생각을 공유해주세요.

        useState는 컴포넌트의 상태를 관리하고 리렌더링을 트리거하는 데 사용되는 반면, useRef는 DOM 요소나 변경이 필요하지만 리렌더링을 트리거하지 않아야 하는 값을 관리하는 데 사용된다.

        따라서 useState는 상태가 변경될 떄마다 컴포넌트를 리렌더링해야하는 경우에 사용하며, useRef는 DOM 요소나 리렌더링 없이 값을 유지해야 하는 경우에 사용한다.
