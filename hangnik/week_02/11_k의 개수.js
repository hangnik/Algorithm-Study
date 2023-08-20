function solution(i, j, k) {
  let arr = [];
  for (i; i <= j; i++) {
    arr.push(i);
  }
  const answer = arr
    .join("")
    .split("")
    .filter((v) => v.includes(k)).length;
  return answer;
}
