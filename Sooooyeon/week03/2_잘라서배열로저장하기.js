// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

// 입출력 예
// my_str	             n    result
// "abc1Addfggg4556b"	 6    ["abc1Ad", "dfggg4", "556b"]
// "abcdef123"	         3    ["abc", "def", "123"]





function solution(my_str, n) {
    const result = []
    // n의 길이의 result를 만들기 위해 전체길이 / n 번 반복
    for (let i = 0; i < (my_str.length / n); i++) {
        let part = ''
        // 각 저장요소 별 내용 입력
        for (let j = i * n; j < i * n + n; j++) {
            if (my_str[j]) part += my_str[j]
            else break
        }
        result.push(part)
    }
    return result
}