function solution(n) {
    var answer = 0;
    let b = 1;
    for(let j=1; j<=10; j++) {    
        b = b * j;
        if (b <= n) {
            answer += 1;
        }
    }
    return answer;
}