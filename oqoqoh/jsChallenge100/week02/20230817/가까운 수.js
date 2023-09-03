//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

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

solution([1, 4, 2, 1], 3);
// 반례입니다.
// 입력값 〉 [4, 4, 2, 1], 3
// 기댓값 〉 2

```
function solution(array, n) {
    const answer = array
    .sort((a, b) => a - b)
    .map((v) => [v, Math.abs(v - n)])
    .sort((a, b) => a[1] - b[1]);
    return answer[0][0];
}

function solution(array, n) {
    let arr = []
    array.sort((a,b)=> a - b);
    for(let i=0; i< array.length; i++){
        arr.push(Math.abs(n - array[i])) ; 
    } 
  //arr = [ 17, 10, 8 ] -> n에 각 원소를 뺀 값이 들어있는 배열
  // 제일 작은 수를 min변수에 담음
  let min  = Math.min(...arr);  // 8

  // min값의 인덱스가 기본배열의 가까운 수가 들어있는 원소자리이기 때문에 인덱스를 찾음
    let indx =  arr.indexOf(min)
    return array[indx];
}     

```;

function solution2(array, n) {
    const sub = array.map((v) => {
        return Math.abs(v - n);
    });

    return sub.indexOf(Math.min([...sub]));
}

solution2([1, 4, 2, 1], 3);

function solution3(array, n) {
    return array[
        array
            .sort((a, b) => a - b)
            .map((v) => Math.abs(v - n))
            .indexOf(Math.min(...array.map((v) => Math.abs(v - n))))
    ];
}

solution3([1, 4, 2, 1], 3);
