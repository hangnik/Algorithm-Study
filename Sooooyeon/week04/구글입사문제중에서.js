function solution(){
const answer = Array(10000).fill(0).map((v,i)=>i).join("").split("").filter(v=> v==='8').length;
return answer;
}

console.log(solution());  // 출력 4000

