function solution(rsp) {
  const answer = [...rsp];
  for (i = 0; i < answer.length; i++) {
    if (answer[i] === "2") {
      answer[i] = "0";
    } else if (answer[i] === "0") {
      answer[i] = "5";
    } else if (answer[i] === "5") {
      answer[i] = "2";
    }
  }
  return answer.join("");
}

// 객체 사용, 삼항연산자, forEach
