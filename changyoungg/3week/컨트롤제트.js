function solution(s) {
    var answer = 0;
    let sArray = s.split(" ");
    for(let i = 0; i<sArray.length; i++) {
        if(sArray[i] !== 'Z') {
            answer += Number(sArray[i]);
        } else if(sArray[i] == 'Z') {
            answer -= Number(sArray[i-1]);
        }
    }
    return answer;
}