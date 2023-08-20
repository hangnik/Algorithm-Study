// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

// order	result
//   3	    1
// 29423	  2

// 1. 접근방식
//  3, 6, 9의 개수를 셈
// order가 string이 아니라 숫자타입이기때문에 문자열로 만들어서 쪼갬

function solution(order){
  let str =  order.toString().split("").// [ '2', '9', '4', '2', '3' ]
  filter(v=> ['3','6','9'].includes(v)); 
  return str.length;
}

solution(29423)




//2. 접근방식 
function solution(order) {
  let answer = order.toString().replaceAll(/[^369]/g , '');
  return answer.length;
}

// 정규표현식 사용 
let ans = '29423'.replaceAll(/[^369]/g , '');  //93
console.log(ans);


//[^369] -> 3,6,9가 아닌 문자열을 찾는다.
// replaceAll(/[^369]/g , '')-> 3,6,9가 아닌 문자열이 있다면 모든 부분을 빈 문자열로 교체한다.