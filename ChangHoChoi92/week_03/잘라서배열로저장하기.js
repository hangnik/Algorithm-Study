// https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    var answer = [];
    let arr = my_str.split("");
    let count = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (count >= n) {
            count = 1
            result.push(",");
            result.push(arr[i]);
        } else {
            result.push(arr[i]);
            count++
        }
    }
    answer = result.join("");
    return console.log(answer.split(","));
}

solution('abc1Addfggg4556b', 6)
// solution('abcdef123', 3)

// 유툽 정답
// 정규표현식 방법
// my_str.match(new RegExp(`.{1,${n}}`, 'g'))

// 정규표현식 사용 안하는 방법
// for(let i=0; i<my_str.length; i+=n){
//     answer.push(my_str.slice(i, i+n))
// }
// return answer