function solution(s) {
  let answer = 0;
  const arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      answer -= parseInt(arr[i - 1]);
    } else {
      answer += parseInt(arr[i]);
    }
  }
  return answer;
}

solution("1 2 Z 3");
