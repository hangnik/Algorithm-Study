function solution(lines) {
  let answer = 0;

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[1][0] < lines[0][1]) {
        answer += lines[0][1] - lines[1][0];
      }
      if (lines[2][0] < lines[1][1]) {
        answer += lines[1][1] - lines[2][0];
      }
      if (lines[2][0] < lines[1][1] && lines[2][0] < lines[0][1]) {
        answer -= lines[0][1] - lines[1][0];
      }
    }
  }
  console.log(answer);
  return answer;
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);

// 다시 풀기
