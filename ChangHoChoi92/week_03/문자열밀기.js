// https://school.programmers.co.kr/learn/courses/30/lessons/120921
// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
    var answer = 0;
    let arrA = A.split("");
    for (let i = 0; i < arrA.length; i++) {
        if (arrA.join("") === B) {
            return 0
        }

        let lastIndex = arrA.pop();
        arrA.unshift(lastIndex);

        if (arrA.join("") === B) {
            answer++;
            return answer;
        } else if (arrA.join("") !== B) {
            answer++;
        }
    }
    if (answer > 0) {
        return -1
    }
    return answer;
}

solution("hello", "ohell");

// 유툽 정답
// 생각의 전환으로 푸는 문제
// return ((B+B).indexOf(A));