// -1 1 3 -2 2 => -1 -2 1 3 2
// 1. 음수배열과 양수배열로 나누기
// 2. 두 배열을 합쳐서 리턴

function solution(arr) {
  const negativeArr = [];
  const positiveArr = [];

  arr.forEach((v) => {
    v < 0 ? negativeArr.push(v) : positiveArr.push(v);
  });

  return [...negativeArr, ...positiveArr];
}
