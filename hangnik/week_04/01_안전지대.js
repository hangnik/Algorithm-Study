function solution(board) {
  let cnt = 0;

  // 배열의 변경 정보를 담는 배열
  const changes = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(0)
  );

  // 안전 지역 : 0 / 지뢰 지역 : 1 / 위험 지역 : 2
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 배열의 인덱스 범위를 벗어나는 경우 고려
      if (board[i][j] === 1) {
        // 나중에 지뢰 지역도 0으로 카운트 되는 것을 방지하여 먼저 1로 변경
        changes[i][j] = 1;

        if (i - 1 >= 0 && j - 1 >= 0) changes[i - 1][j - 1] = 2; // 대각선 왼쪽 위
        if (i - 1 >= 0) changes[i - 1][j] = 2; // 위
        if (i - 1 >= 0 && j < board[i].length) changes[i - 1][j + 1] = 2; // 대각선 오른쪽 위
        if (j - 1 >= 0) changes[i][j - 1] = 2; // 왼쪽
        if (j + 1 < board[i].length) changes[i][j + 1] = 2; // 오른쪽
        if (i + 1 < board.length && j - 1 >= 0) changes[i + 1][j - 1] = 2; // 대각선 왼쪽 아래
        if (i + 1 < board.length) changes[i + 1][j] = 2; // 아래
        if (i + 1 < board.length && j + 1 < board[i].length)
          changes[i + 1][j + 1] = 2; // 대각선 오른쪽 아래
      }
    }
  }

  // 배열에서 돌면서 값이 0이면 cnt++
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (changes[i][j] === 0) {
        cnt++;
      }
    }
    console.log(cnt);
  }

  return cnt;
}
