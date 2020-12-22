//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm('보호자의 동의를 받으셨나요?');
//  }
//}

//if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.

//아래 조건을 충족하는 해답 2개를 작성해야 합니다.

//1. 물음표 연산자 ?를 사용하여 본문을 작성
//2. OR 연산자 ||를 사용하여 본문을 작성

// 1.
function checkAge(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

//2.
function checkAge2(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}

checkAge(15);
checkAge2(15);
