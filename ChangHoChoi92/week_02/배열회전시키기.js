// https://school.programmers.co.kr/learn/courses/30/lessons/120844
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
    if (direction === "right") {
        let popNum = numbers.pop()
        numbers.unshift(popNum);
    } else if (direction === "left") {
        let popNum = numbers.shift();
        numbers.push(popNum);
    }

    return numbers;
}

solution([4, 455, 6, 4, -1, 45, 6], "right")