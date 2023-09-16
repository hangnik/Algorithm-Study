// n 이하의 값까지 돌면서 n과의 나머지 값이 0인 값들만 더해주기
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (i % n === 0) answer += i;
  }

  return answer;
}
