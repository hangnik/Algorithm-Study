function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || String(i).includes("3")) n += 1;
  }
  console.log(n);
  return n;
}

// 다시 풀어보기
solution(5);
