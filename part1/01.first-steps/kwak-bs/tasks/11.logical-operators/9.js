let loginID = prompt("ID를 입력해주세요");

if (loginID == "Admin") {
  // ID
  let passwd = prompt("비밀번호를 입력해주세요");

  if (passwd == "The Master") {
    // Passwd
    alert("환영합니다!");
  } else if (passwd == "" || passwd == null) {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (loginID == "" || loginID == null) {
  alert("취소되었습니다!");
}
