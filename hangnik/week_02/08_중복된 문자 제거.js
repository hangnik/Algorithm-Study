function solution(my_string) {
  const mySet = new Set(my_string);
  const answer = [...mySet].join("");
  return answer;
}
