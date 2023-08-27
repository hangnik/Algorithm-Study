

//한 번만 등장한 문자 




//잘라서 배열로 저장하기 
function solution(my_str, n) {
    let strArr = my_str.split("");
    
    let arr = [];
    
    while(strArr.length > 0){
        arr.push(strArr.splice(0,n).join(""));
    }
    
    return arr;
}





//진료 순서 정하기 






//영어가 싫어요
function solution(numbers) {
    let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numStr.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}




//외계어 사전 







//문자열 밀기 



//컨트롤 제트 


//등수 매기기
// 블로그 참조 
function solution(score) {
    const avgs = score.map(([a, b]) => (a + b) / 2);
    const answer = Array.from( {length: avgs.length }, () => 1);
    
    for (let i = 0; i < avgs.length; i++ ) {
      for (let j = 0; j < avgs.length; j++) {
        if (avgs[j] > avgs[i]) answer[i]++;
      }
    }
    return answer;
  }


  //저주의 숫자 3
//  블로그 참조
  function solution(n) {
    let ans = 0;
    
    for(let i = 1; i <= n; i++){
        ans += 1;
        
        while(true){
            if(ans % 3 === 0 || String(ans).includes("3")){
                ans += 1;
                
                continue;
            }
            
            break;
        }
    }
    
    return ans;
}



//다항식 더하기 



//안전지대 


//겹치는 선분의 길이