function solution(numbers, direction) {
    var answer = [];
    if (direction == 'right') {
        answer.push(numbers[numbers.length-1])
        for (let i=0; i<numbers.length-1; i++) {
            answer.push(numbers[i]);
            console.log(answer)
        }
    } else if (direction == 'left') {
        for (let j=1; j<numbers.length; j++) {
            answer.push(numbers[j]);
        }
        answer.push(numbers[0]);
    }
    return answer;
}