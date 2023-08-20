//문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let answer = '';

    const reverseString = (my_string) => {
        if (my_string.length <= 1) {
            return my_string[0];
        }
        return reverseString(my_string.slice(1)) + my_string[0];
    };

    answer = reverseString(my_string);

    return answer;
}

console.log(solution('jaron'));
