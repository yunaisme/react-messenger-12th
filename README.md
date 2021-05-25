## 2주차 미션: React-Messenger💌

---

### 서론

---

안녕하세요 12기 프론트엔드 운영진 고은입니다😆

2주차부터는, React를 사용하여 미션을 진행해주시면 되는데요, 리액트 첫 미션인 만큼 React 자체에 익숙해지기 위한 시간을 가져보시게 될거에요!

또한 1주차에서 사용해봤던 바닐라 JS의 불편함이라고 할 수 있는 점들을 리액트가 어떻게 해결하는지 직접 코드를 짜보면서 알아보면서 리액트의 컨셉을 전체적으로 이해하시면 좋을 것 같습니다~

2주차 미션 마감일시는 2020년 9월 25일 금요일까지입니다.

진행 중 어려운 상황이 있다면, 우선 스스로 공부하고 찾아보시구

너무 해결이 안된다 싶으면 슬랙의 qna채널에 올려주시면 됩니다~~

PR 보내실땐 양식 맞춰주시고, 이번주 부터는 now로 배포한 링크까지 PR 보내주실때 링크 첨부해주세요~~

12기분들 너무 멋져요!! 이번주도 화이팅✨

---

## 미션

---

#### 미션목표

---

- React의 기초를 이해한다.
- useState로 컴포넌트의 상태를 관리할 수 있게된다.
- useEffect의 사용법을 이해한다.

### 기한

---

- 2020년 9월 25일(금)까지

### Key Questions?

---

- Virtual DOM이 무엇일까요?

  말 그대로 가상의 dom입니다.
  virtual dom이 없으면, 만약 dom에 변화를 주고싶은 경우 렌더 트리를 통째로 재생산해서 모든 스타일을 다시 계산해야하는데
  virtual dom을 둠으로써, dom에 변화를 주고 싶을 때 실제 dom에 적용하기 전에 virtual dom에 먼저 적용을 해보고 변경된 부분만 찾아서 실제 dom에서 그 부분만 바꿀 수 있습니다
  그래서 효율적으로 변화를 주는 것이 가능합니다.


- 미션을 진행하면서 느낀, 리액트를 사용하는 장점이 있었다면? 
  
  컴포넌트 단위로 코드를 작성하기 때문에 후에 유지보수도 편하고 가독성도 좋은 것 같습니다. 또 배우기도 쉽다고 느껴집니다.


- 리액트에서는 상태를 어떻게 관리할까요? 

  state, props를 사용합니다. 또 useState를 사용할 수도 있습니다.


- styled-components 사용후기 (CSS와 비교) 

  css처럼 클래스를 사용해서 조건부 스타일링을 할 필요가 없고, 특정 스타일을 부여하고 싶다면 props를 사용하면 되기 때문에 모듈화가 잘 된다는 점이 좋은 것 같습니다.


- 미션을 통해 배운 점과 힘들었던 부분

  styled component 부분이 제일 힘들었습니다. 또 훅 개념을 이번 미션을 통해 처음 알았는데, 간단하게 상태를 관리할 수 있어 좋았습니다.
  또 모듈화의 중요성을 느끼는 계기가 되었습니다.
  
 
### 필수 요건

---

- 함수형 컴포넌트를 사용한다.
- styled-component를 이용하여 스타일링 한다.
- 상단바에 메시지를 보내는 사람의 프로필을 띄운다. + 상단바의 프로필로 메시지 발신자를 바꿀 수 있게 한다.

  (user: true는 은, user:false는 시원으로 고정됨)

- 공백메시지는 입력되지 않도록 핸들링 한다. + alert 메세지 띄우기
- 메시지 전송후 입력칸을 비워준다.
- 메시지 전송후 스크롤을 밑으로 내려준다. (Hint : useEffect + scrollBy 이용)
- 컴포넌트 이름을 역할이 잘 드러나게 짓는다.
- 개발자도구에서 Style을 복사하지말고, 직접 styled-components를 사용하여 만드는 연습을 한다ㅠㅠ.
- [결과 화면](https://react-messenger.eun-ko.vercel.app)을 구현한다.

## 로컬 실행방법

---

`npm start` : 로컬에서 react application을 자동으로 리로드하여 실행시켜줍니다.

## 배포 방법

---

- now에 회원가입하고 now를 설치합니다.

1. https://zeit.co 에서 회원가입합니다.
2. 터미널에서 `npm i -g now`를 입력해 now를 글로벌로 설치합니다.
3. 명령 프롬프트에서 프로젝트 폴더에 들어간 후 now를 입력합니다.
4. ID/PW를 입력합니다.
5. zeit 가입시 입력한 이메일에서 인증 링크를 클릭합니다. <인증완료>
6. 다시 프로젝트 폴더에서 `now`를 입력하면 자동으로 생성된 url에 배포됩니다!

## 링크 및 참고자료

---

- [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
- [리액트 docs 주요 개념 1-12](https://ko.reactjs.org/docs/hello-world.html)
- [리액트 docs Hook 1-3](https://ko.reactjs.org/docs/hooks-intro.html)
- [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/#%EB%AA%85%EB%AA%85-%EA%B7%9C%EC%B9%99)
- [useState, useEffect hooks](https://velog.io/@velopert/react-hooks#1-usestate)
- [styled-component](https://styled-components.com/docs/basics#getting-started)
