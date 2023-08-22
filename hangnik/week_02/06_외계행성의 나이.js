function solution(age) {
  const answer = [...age.toString()].map((v) =>
    String.fromCharCode(parseInt(v) + 97)
  );
  return answer.join("");
}
