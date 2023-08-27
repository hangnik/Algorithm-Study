// https://school.programmers.co.kr/learn/courses/30/lessons/120871
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

function solution(n) {
    var answer = 0;
    for (let i = 0; i < n; i++) {
        console.log(answer)
        answer += 1
        while (answer % 3 === 0 || answer.toString().split('').includes('3')) {
            answer += 1
        }
    }
    return console.log(answer);
}

solution(15);