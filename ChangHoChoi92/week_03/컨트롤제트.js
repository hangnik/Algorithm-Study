// https://school.programmers.co.kr/learn/courses/30/lessons/120853
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
    var answer = 0;
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (answer === 0) {
            answer = parseInt(arr[i]);
        } else if (arr[i] === 'Z') {
            let z = parseInt(arr[i - 1])
            answer = answer - z
        } else {
            answer = answer + parseInt(arr[i]);
        }
    }
    return console.log(answer);
}

solution("1 2 Z 3");
// solution("-1 -2 -3 Z");


// 유툽 정답
// 배열을 생성해서 push할때 + 를 붙여 줌으로써 문자열에서 숫자 타입으로 변경해서 push 해준다. 그리고 reduce를 통해서 모두 더한 값을 return
// function solution(s) {
//     var answer = 0;
//     let arr = s.split(" ");
//     let result = [];
//     for (let i of arr) {
//         if (i === 'Z') {
//             result.pop();
//         } else {
//             result.push(+i);
//         }
//     }
//     answer = result.reduce((a, c) => a + c, 0);
//     return console.log(answer);
// }
