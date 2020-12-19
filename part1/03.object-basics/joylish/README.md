# 3.객체: 기본

## 🔮 이건 꼭 기억해야해!
- 없음

## 🧐면접관처럼 질문할 목록
- 없음

## 👻 공부하면서 어렵거나 중요한 개념 정리
## 1. 객체형(Object Type)
### 객체형 vs 원시형
- [원시형 타입](https://github.com/We-will-know-JS/JS-TIL/tree/main/part1/01.first-steps/joylish#1216-1%EC%9D%BC%EC%B0%A8)
- 객체형 타입: 키로 구분된 데이터 집합이나 복잡한 개체(entity)
> 중괄호{} 안에는 'key: value' 쌍으로 구성된 <b>프로퍼티</b>가 들어간다. key엔 only 문자형, value엔 모든 자료형 가능하다. 객체 프로퍼티엔 이런 제약이 없다.

<br/>
<b>❓ 객체 리터럴(object literal)</b>

중괄호 {...}를 이용해 객체를 선언하는 것 

<br/>
<b>💥 상수 객체는 수정될 수 있다! </b>

```javascript
const something = {
  name: "strawberry"
};

something.name = "grape";
```

const는 user의 값을 고정하지만, <u>그 내용을 고정하지 않는다!</u>

`const something = {value: 1000}` 이런식으로 새로운 객체 리터럴을 할당해주려고 할 때 오류가 발생한다.

<br/>
<b>💥 계산된 프로퍼티 (Computed property)  </b>

```javascript
let fruit = prompt("어떤 과일을 구매하시겠습니까?");
// strawberry

let bag = {
  [fruit]: 5,
};

alert(bag.strawberry);
```

<br/>
<b>💥 프로퍼티 존재 여부 확인 </b>

- `obj.key이름 === undefined`
  🤔 해당 key에 value가 할당되지 않으면 프로퍼티에 대한 존재 유무를 확인하기 힘들다. 
- `"key이름" in object`

<br/>
<b>💥 <u>정수 프로퍼티</u>를 이용하여 객체 정렬 </b>

```javascript
let codes = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  // ..,
  "1": "미국"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```
49(독일 나라 번호)를 가장 위에 출력되도록 하려면, 나라 번호가 정수로 취급되지 않도록 속임수를 쓰면 된다. 각 나라 번호 앞에 "+"를 붙이면 된다.

```javascript
let codes = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  // ..,
  "+1": "미국"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```