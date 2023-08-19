// https://school.programmers.co.kr/learn/courses/30/lessons/120886
// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
    var answer = 0;
    let arrBefore = before.split("").sort();
    let arrAfter = after.split("").sort();
    let arrAdd = []
    for (let i = 0; i < arrBefore.length; i++) {
        if (arrBefore[i] === arrAfter[i]) {
            arrAdd.push(arrBefore[i]);
        } else {
            answer = 0
        }
    }
    let result = arrAdd.join("");
    let arrAfterJoin = arrAfter.join("");
    if (result === arrAfterJoin) {
        answer = 1;
    }
    return answer;
}

solution("olleh", "hello");
solution("allpe", "apple");