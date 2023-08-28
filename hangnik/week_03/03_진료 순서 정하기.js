function solution(emergency) {
  const rank = [...emergency].sort((a, b) => b - a); // [ 76, 24, 3 ]

  /* for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (rank[i] === emergency[j]) {
        emergency.splice(j, 1, i + 1);
        break;
      }
    }
  }

  return [...emergency]; */
  // 테스트4에서 실패
  // 얕은 복사를 해서 같은 배열을 참조하기 때문에 안됨...
  // 깊은 복사를 하는 방법 찾아보고 했는데도 안됨.... => JSON.parse(JSON.stringify(emergency)) 이 방법은 배열에 포함된 객체나 중첩된 객체에서는 올바르게 동작 안될 수도 있음
  // gpt 추천 방법 : map이나 스프레드 문법으로 새 배열 생성
  // 근데 map도 스프레드 문법도 안됨ㅋ

  const answer = [];

  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (rank[i] === emergency[j]) {
        answer[j] = i + 1;
        break;
      }
    }
  }

  return answer;
}

solution([3, 76, 24]);

/* function solution(emergency) {
  let sorted = emergency.slice().sort((a,b)=>b-a);
  return emergency.map(v=>sorted.indexOf(v)+1);
} */
