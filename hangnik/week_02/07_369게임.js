function solution(order) {
  const answer = [...order.toString()].filter(
    (v) => parseInt(v) != 0 && parseInt(v) % 3 === 0
  );
  return answer.length;
}

// 정규표현식, set으로 설정 후 has 메서드로 필터링
