function solution(age) {
    var answer = '';
    age = age.toString();
    let val = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for (let i=0; i<age.length; i++) {
        answer += val[age[i]];
    }
    
    return answer;
}