function solution(my_string) {
  const answer = my_string.split("").reverse().join("");
  return answer;
}

// split보다 전개 구문을 사용하는 것이 안전
