// 1. n - (n-1) 한 값들을 배열로 생성
// 2. 배열에서 가장 작은값의 위치 찾기

function solution() {
  const s = [1, 3, 4, 8, 13, 17, 20];
  const arr = [];

  for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i - 1]);
  }

  const pos = arr.indexOf(Math.min(...arr));
  const answer = `(${s[pos]}, ${s[pos + 1]})`;

  return answer;
}
solution();
