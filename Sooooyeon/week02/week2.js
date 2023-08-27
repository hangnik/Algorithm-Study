// Week 02 23.08.14

// 문자열 뒤집기
function solution(my_string) {
    var answer = my_string.split('').reverse().join('');
    return answer;
}


// 특정 문자 제거하기
function solution(my_string, letter) {
    return my_string.replaceAll(letter, '');
}


// 배열의 유사도
// 나의 정답
function solution(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                count += 1;
            }
        }
    }
    return count;
}
// 다른 사람의 풀이
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}


//--------------------------------------------------//



// Week 02 23.08.15

// 가위 바위 보
// 나의 정답
function solution(rsp) {
    const answer = [];
    const sp = rsp.split('');
    for (let i = 0; i < rsp.length; i++) {
        sp[i] === "2" ? answer[i] = "0" : sp[i] === "0" ? answer[i] = "5" : answer[i] = "2"
    }
    return answer.join('');
}
// 다른 사람의 풀이 1
function solution(rsp) {
    return rsp.split("").map((v) => v === "2" ? 0 : (v === "0" ? 5 : 2)).join("")
}
// 다른 사람의 풀이 2
/*
가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}


// 배열 회전시키기
// 나의 정답
function solution(numbers, direction) {
    const result = [];
    if (direction === "right") {
        for (let i = 1; i < numbers.length; i++) {
            result[i] = numbers[i - 1];
        }
        result[0] = numbers[numbers.length - 1];
    } else if (direction === "left") {
        for (let j = 0; j < numbers.length - 1; j++) {
            result[j] = numbers[j + 1];
        }
        result.push(numbers[0]);
    }
    return result;
}
// 다른 사람의 풀이
function solution(numbers, direction) {
    var answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}

// 외계행성의 나이
// 나의 정답
function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const num = age.toString().split('');
    const answer = [];
    for (let i = 0; i < num.length; i++) {
        answer.push(arr[num[i]])
    }
    return answer.join('');
}
// 다른 사람의 풀이
function solution(age) {
    return age
        .toString()
        .split("")
        .map((v) => "abcdefghij"[v])
        .join("");
}





//--------------------------------------------------//



// Week 02 23.08.16

// 369게임
// 나의 정답
function solution(order) {
    const answer = order.toString().split('').filter(v => v === "3" || v === "6" || v === "9")
    return answer.length;
}
// 다른 사람의 풀이
function solution(order) {
    const mySet = new Set([3, 6, 9]);
    return String(order).split('')
        .filter(num => mySet.has(Number(num)))
        .length;
}

// 중복된 문자 제거
// 나의 정답
function solution(my_string) {
    const set = new Set(my_string);
    const arr = [...set].join('');
    return arr;
}
// 다른 사람의 풀이
function solution(my_string) {
    return [...new Set(my_string)].join('');
}

// A로 B 만들기
function solution(before, after) {
    if (before.split('').sort().join('') === after.split('').sort().join('')) {
        return 1;
    }
    return 0;
}
// 다른 사람의 풀이




//--------------------------------------------------//



// Week 02 23.08.17

// 팩토리얼
// 강사님 정답 - 틀린답.
function solution(n) {
    let i = 1;
    let f = 1;
    while (f * i < n) {
        f *= ++i;
    }
    return i;
}
// 다른 사람의 풀이
function solution(n) {
    let multiplier = 1;
    let value = 1;

    while (value <= n) {
        multiplier += 1;
        value *= multiplier;
    }

    return multiplier - 1;
}

// k의 개수
// 나의 정답
function solution(i, j, k) {
    const arr = [];
    const count = 0;
    for (let n = i; n <= j; n++) {
        arr.push(n)
    }
    return arr.toString().split('').filter(v => v === k.toString()).length;
}
// 다른 사람의 정답
function solution(i, j, k) {
    let a = '';
    for (i; i <= j; i++) {
        a += i;
    }

    return a.split(k).length - 1;
}

// 가까운 수
// 나의 정답 - 해결 못함
function solution(array, n) {
    const sub = array.map(v => {
        return Math.abs(v - n);
    })

    return sub.indexOf(Math.min([...sub]));
}
// 강사님 정답 - 
function solution(array, n) {
    return array[
        array
            .sort((a, b) => a - b)
            .map((v) => Math.abs(v - n))
            .indexOf(Math.min(...array.map((v) => Math.abs(v - n))))
    ];
}
// [1, 2, 4] 3   0을 기준으로 비교하는 방법도 있음 

// 인덱스를 리턴하는데.. 
// sort 정렬을 하면 인덱스가 바뀌게되니까


// 규영님 코드

function solution(array, n) {
    let diff = 0; //두 수의 차이값
    let result = 0; //결과로 나오ㅏ야하는 값

    array.forEach((num, i) => {
        let abs = Math.abs(n - num);

        if (i === 0) {
            diff = abs;
            result = num;
            return;
        }

        if (diff >= abs) {
            if (diff === abs) {
                result > num ? (result = num) : null;
            } else {
                diff = abs;
                result = num;
            }
        }
    });
    return result;
}