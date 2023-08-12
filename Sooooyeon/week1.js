// Week 01 23.08.07

// 몫 구하기
function solution(num1, num2) {
    return parseInt(num1 / num2)
}


// 숫자 비교하기
function solution(num1, num2) {
    return num1 === num2 ? 1 : -1;
}


// 나이출력
function solution(age) {
    return 2022 - age + 1;
}



//--------------------------------------------------//



// Week 01 23.08.08

// 각도기
// 나의 정답
function solution(angle) {
    if (0 < angle && angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if (90 < angle && angle < 180) {
        return 3;
    } else (angle === 180) {
        return 4;
    }
}
// 다른 사람의 풀이
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}


// 양꼬치
function solution(n, k) {
    return 12000 * n + 2000 * k - 2000 * parseInt(n / 10);
}


// 짝수의 합
function solution(n) {
    return Array(n).fill(0).map((_, i) => i + 1).filter(v => v % 2 === 0).reduce((a, c) => a + c, 0)
}



//--------------------------------------------------//



// Week 01 23.08.09

// 배열의 평균값
// 나의 정답
function solution(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length
}
// 다른 사람의 풀이
function solution(numbers) {
    var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return answer;
}


// 머쓱이보다 키 큰 사람
function solution(array, height) {
    return array.filter(v => v > height).length;
}


// 중복된 숫자 개수
function solution(array, n) {
    return array.filter(v => v === n).length;
}



//--------------------------------------------------//



// Week 01 23.08.10
// 피자 나눠 먹기 (1)
// 나의 정답
function solution(n) {
    if (n % 7 !== 0) {
        return parseInt(n / 7) + 1;
    } else {
        return parseInt(n / 7);
    }
}
// 다른 사람의 풀이
function solution(n) {
    return Math.ceil(n / 7)
}


// 짝수 홀수 개수
// 나의 정답
function solution(num_list) {
    const count = [0, 0];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            count[0] += 1;
        } else {
            count[1] += 1;
        }
    }
    return count
}
// 다른 사람의 풀이
function solution(num_list) {
    var answer = [0, 0];
    for (let a of num_list) {
        answer[a % 2] += 1
    }
    return answer;
}


// 배열 두 배 만들기
// 나의 정답
function solution(numbers) {
    const result = numbers.map((v) => {
        return v * 2;
    })
    return result;
}
// 다른 사람의 풀이
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}