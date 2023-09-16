// n을 배열로 만들어서 모두 더해주기
function solution(n) {
  const answer = [...n.toString()].reduce((a, c) => a + parseInt(c), 0);

  return answer;
}
