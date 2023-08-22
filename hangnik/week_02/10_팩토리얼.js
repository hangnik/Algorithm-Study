function solution(n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
    if (result >= n) break;
  }
  const answer = result === n ? i : i - 1;
  return answer;
}
