# 1. 자바스크립트 기본

## 🔮 이건 꼭 기억해야해!

- 없음

## 🧐면접관처럼 질문할 목록

- 없음

## 👻 공부하면서 어렵거나 중요한 개념 정리

- #### 자바스크립트 엔진 종류

  - Chrome, Opera - **V8**
  - Firefox - **SpiderMonkey**
  - IE - **Trident** or **Chakra**
  - Microsoft Edge - **ChakraCore**
  - Safari - **SquirrelFish**

---

- **use strict**는 스크립트 최상단 또는 함수 본문 맨 앞에 와야 적용됨

---

- #### 자바스크립트 기본 자료형 8개

  - number
  - bigint
  - string
  - boolean
  - null
  - undefined
  - object
  - symbol

 ---

- #### 숫자형 변환

  - undefined - **NaN**
  - null - **0**
  - string
    - 양쪽 공백 제거 후 남아있는 문자열 없다면 **0**  
      `ex) "" -> 0`
    - 그렇지 않다면 **수**  
      `ex) "123" -> 123`
    - 수 외의 문자가 있다면 **NaN**  
      `ex) "12a3" -> NaN`

- #### 불린형 변환

  - 숫자 0, "", null, undefined, NaN은 **false**
  - 그 외는 **true**  
    `ex) "0", " " 은 true임`

- 문자열을 숫자로 변환할 때 `+` 붙임

  ```javascript
  const a = "3";
  const b = 2 + a;
  const c = 2 + +a;
  console.log(b); // 23
  console.log(c); // 5
  ```

---

- `||` 는 첫 번째 truthy를 찾음. 모두 falsy이면 마지막 값을 반환

- `&&`는 첫 번째 falsy를 찾음. falsy가 없다면 마지막 값을 반환

---

- #### null 병합 연산자 `??`

  - a ?? b -> a가 null도 아니고 undefined도 아니면 a, 그 외는 b

- #### `??`와 `||`의 차이

  - `||` 는 첫 번째 truthy 값을 반환
  - `??` 는 첫 번째 정의된(defined) 값을 반환

    ```javascript
    ex)
    height = height ?? 100; // height에 값 정의되지 않았다면 100 할당

    let height = 0;
    height = height || 100; // 100
    height = height ?? 100; // 0
    ```

- #### `??`는 `&&`나 `||`와 함께 사용 불가

  ```javascript
  ex)
  let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'
  let x = (1 && 2) ?? 3; // 제대로 동작
  ```

---

- #### 2중 for문 break

  ```javascript
  outer:
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ...
      break outer;
    }
  }
  ```
