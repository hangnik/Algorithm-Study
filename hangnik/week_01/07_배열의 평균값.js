function solution(...numbers) {
  const answer = numbers.reduce((a, c) => a + c, 0) / numbers.length;
  return answer;
}
