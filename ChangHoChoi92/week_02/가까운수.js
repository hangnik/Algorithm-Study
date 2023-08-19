// https://school.programmers.co.kr/learn/courses/30/lessons/120890
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
    array.sort((a, b) => a - b);
    var answer = 0;
    let def = 0;
    let defArr = [];
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        def = ((array[i] - n) < 0) ?
            -(array[i] - n) : (array[i] - n)
        defArr.push(def);
        result = defArr.indexOf(Math.min(...defArr));
        answer = parseInt([array[result]]);
    }
    return answer;
}

solution([3, 10, 28], 20);




