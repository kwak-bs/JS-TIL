# 20.00.00 1.제목

## 🔮 이건 꼭 기억해야해!
1. `null` vs `undefined` vs `NaN` primitive 타입
2. Value & Reference
3. `statement` vs `expression`
4. `call stack`
5. 

## 🧐면접관처럼 질문할 목록
- 없음

## 👻 공부하면서 어렵거나 중요한 개념 정리
### 12.16 1일차
1. script 태그
    
    src 속성이 있으면 태그 내부의 코드는 무시된다.

2. [Part 2 볼 때 다시 이해해보기]

    스크립트를 별도의 파일에 작성하면 <b>브라우저가 스크립트를 다운받아 캐시(cache)에 저장</b>하기 때문에, 성능상의 이점이 있다.

3. 한글 인코딩 방식: `EUC-KR`, `UTF-8`
  - `EUC-KR`
    
    : 1byte 길이의 ASCII 라는 인코딩 방식을 확장하여 한글을 사용할 수 있도록 만든 2byte 길이의 국가 언어 코드; 상대적으로 용량이 작음
  
    → 문제 발생 !!
    
     세계 어디에서나 공통으로 사용되는 인코딩 방식이 아니기 때문에, 다른 언어를 사용하는 환경(외국 등)에서는 한글 페이지를 제대로 볼 수 없음 
  - `UTF-8`: 표준화 및 글로벌 환경
   
    따라서 Window 운영체제에서 기본 인코딩이기 때문에 UTF-8을 쓰려면 meta에 밝혀줘야 한다.

4. Primitive Type

    String, number, bigint boolean, null, undefined, function

- Type Conversion
    1. int + boolean → int

        - true: 1
        - false: 0

    2. int + String → String
      
        💥 `- 빼기` 연산은 사용할 수 없다. 사용 시 NaN이다.

- Falsy data type
  
    `0`, `""`, `undefined`, `NaN`, `null`
  ```javascript
  console.log(true==0);
  console.log(true=="");
  console.log(true==undefined);
  console.log(true==NaN);
  console.log(true==null);
  ```
- `==` vs `===`
  - `==` : 비교하는 값의 type conversion 발생
  - `===`

- `typeof` vs `instanceof`
  - `typeof` 
  
    : primitive type 확인
    💥 typeof로 null을 확인하면 object type으로 출력됨
  - `instanceof`
  
    : Only! array인지 object 인지 확인
  
    💥 primitive type 확인 어려움

- Reference Type(callByValue) and Reference Type(callByReference)
  -  CallByValue
      
      `String, number, boolean, Nan, undefined`
  - CallByReference
      
    `Array, Json, Function`

    💥 단순 비교하면 false가 나온다! toString 또는 stringfy 함수를 이용하거나 Array.prototype을 이용하여 함수를 정의하여 Array, Json, Function이 동일한지 비교할 수 있다.
    ```javascript
    [5] === [5]
    // false
    [5].toString() === [5].toString()
    // true
    ```
5. 🦄 `statement` vs `expression`
  - `statement`
    
    : 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)
  - `expression`
    : 

6. 🦄 Callstack

    자바스크립트에서는 함수를 실행할 때 Stack에 저장하여 실행한다.

```javascript
  function third() {
    console.log("Three is called!");
  }

  function second() {
  third();
  }

  function first() {
  second();
  }

  function zero() {
  first();
  }

  zero();
```

- 함수 호출 순서
> zero → first → second → third
- 함수 실행 순서
> third ("Three is called!" 출력) → second → first → zero