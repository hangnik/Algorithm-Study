function solution(score) {
  const avg = score.map((v) => {
    return v.reduce((a, c) => a + c) / v.length;
  });

  const sortArr = [...avg].sort((a, b) => b - a);

  const answer = avg.map((v) => sortArr.indexOf(v) + 1);
  return answer;
}

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
