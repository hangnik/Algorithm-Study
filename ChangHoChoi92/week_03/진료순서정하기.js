// https://school.programmers.co.kr/learn/courses/30/lessons/120835
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
    var answer = [];
    // slice를 써야만 깊은 복사로 정렬된 값을 sort가 받을 수 있음
    let sort = emergency.slice().sort((a, b) => (b - a))
    console.log(sort);
    answer = emergency.map(v => sort.indexOf(v) + 1);
    return console.log(answer);
}



solution([3, 76, 24]);
// solution([1, 2, 3, 4, 5, 6, 7]);
