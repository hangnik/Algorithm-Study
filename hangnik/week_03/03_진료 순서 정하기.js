function solution(emergency) {
  const rank = [...emergency].sort((a, b) => b - a); // [ 76, 24, 3 ]

  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (rank[i] === emergency[j]) {
        rank.splice(j, 1, i + 1);
        break;
      }
    }
  }

  return [...emergency];
}

solution([7, 1]);

/* function solution(emergency) {
  let sorted = emergency.slice().sort((a,b)=>b-a);
  return emergency.map(v=>sorted.indexOf(v)+1);
} */
