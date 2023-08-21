// https://school.programmers.co.kr/learn/courses/30/lessons/120896
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
    var answer = [];
    let arr = s.split("");
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        result[val] = result[val] === undefined ?
            1 : result[val] + 1
    }
    const keys = Object.keys(result);
    for (let j = 0; j < keys.length; j++) {
        let k = keys[j];
        let v = result[k];
        if (v === 1) {
            answer.push(k);
        }
    }
    answer.sort((a, b) => a > b ? 1 : -1);
    return answer.join("");
}

solution('abcabcadcd')
// solution('abdc')
// solution('hello')

// 유툽 정답
// return [...s].filter(c => s.split(c).length == 2).sort().join('');