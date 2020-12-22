// a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.

// 만든 함수는 아래와 같이 동작해야 합니다.

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// if문
function min(a, b) {
  let small;

  if( a < b ) {
    small = a;
  } else if(a > b){
    small = b;
  } else {
    small = a;
  }

  return small;
}


// 물음표 연산자사용
function min2(a, b) {
  return a>b ? b : a
}

alert(min(1, 1));
min2(2,5);
min(3,-1);