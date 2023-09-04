// 1. 1부터 10,000까지 배열 생성
// 2. 배열을 모두 합쳤다가 split 메서드로 숫자 하나씩 나눠줌
// 3. 값이 8인 경우만 필터링해서 배열로 생성 후 길이 출력

function solution() {
  const arr = Array.from({ length: 10000 }, (_, i) => i + 1);
  const answer = arr
    .join()
    .split("")
    .filter((v) => v === "8").length;

  return answer;
}
