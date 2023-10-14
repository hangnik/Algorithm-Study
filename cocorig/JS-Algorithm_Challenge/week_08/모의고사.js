function solution(answers) {
  const method = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ]

  const scores = [0, 0, 0];

  for(let i = 0; i < answers.length; i++) {
   for(let j = 0; j < method.length; j++) {
    if(method[j][i % method[j].length] === answers[i]){
      scores[j]++;
    }
   }
  }
  const maxScore = Math.max(...scores);
  let result = [];

  for (let i = 0; i < scores.length; i++) {
    if (maxScore === scores[i]) {
      result.push(i + 1);
    }
  }
  return result.sort((a, b) => a - b);
  

}
console.log(solution([1,3,2,4,2]));