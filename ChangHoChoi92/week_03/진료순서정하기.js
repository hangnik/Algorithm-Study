// https://school.programmers.co.kr/learn/courses/30/lessons/120835
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
    var answer = [];
    let arr = [];
    let sort = emergency.sort((a, b) => (b - a))
    console.log(sort);
    for (let i = 0; i < sort.length; i++) {
        map.set([i + 1], sort[i]);
    }
    console.log(map);

    return answer;
}



solution([3, 76, 24]);
// solution([1, 2, 3, 4, 5, 6, 7]);
