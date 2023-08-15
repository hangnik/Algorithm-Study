// https://school.programmers.co.kr/learn/courses/30/lessons/120826
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.


function solution(my_string, letter) {
    var answer = '';
    let split = my_string.split("");
    let array = [];
    for (let i = 0; i < split.length; i++) {
        if (letter !== split[i]) {
            array.push(split[i]);
        }
    }
    answer = array.join("");
    return answer;
}

solution('BCBdbe', 'B');