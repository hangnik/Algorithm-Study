function solution(polynomial) {
  const polyArr = polynomial.split(" ");

  let xArr = polyArr
    .filter((v) => v.includes("x"))
    .map((v) => {
      if (v === "x") v = "1x";
      return parseInt(v);
    })
    .reduce((a, c) => a + c, 0);

  let numArr = polyArr
    .filter((v) => !isNaN(Number(v)))
    .map(Number)
    .reduce((a, c) => a + c, 0);

  if (xArr === 1) {
    xArr = "x";
    return numArr === 0 ? `${xArr}` : `${xArr} + ${numArr}`;
  } else if (xArr === 0) {
    return `${numArr}`;
  } else if (numArr === 0) {
    return `${xArr}x`;
  } else {
    return `${xArr}x + ${numArr}`;
  }
}

console.log(solution("x + 0"));

// 일차 항과 상수 항 배열 따로 나눠서
// 일차 항 배열끼리, 상수 항 배열끼리 모두 더해서 조인?

// 8,10,12 통과X
// 계수가 1일 시 1x가 아닌 x로

// 10 통과X
// 반례 : x + 0 => 1x
