// https://school.programmers.co.kr/learn/courses/30/lessons/120882
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
    var answer = [];
    let result = [];
    for (let i = 0; i < score.length; i++) {
        result.push(score[i].reduce((a, b) => a + b, 0) / 2)
    }
    let sort = result.slice().sort((a, b) => b - a);
    answer = result.map(v => sort.indexOf(v) + 1);
    return console.log(answer);
}

solution([[80, 70], [90, 50], [40, 70], [50, 80]]);

//유튭 정답
// function solution(score) {
//     let 총합 = score.map(v => v[0] + v[1]);
//     let 정렬된배열 = 총합.slice().sort((a,b) => b - a);
//     return 총합.map(v =>정렬된배열.indexOf(v) + 1);
// }
