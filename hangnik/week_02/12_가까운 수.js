function solution(array, n) {
  const answer = array
    .sort((a, b) => a - b)
    .map((v) => [v, Math.abs(v - n)])
    .sort((a, b) => a[1] - b[1]);
  return answer[0][0];
}
