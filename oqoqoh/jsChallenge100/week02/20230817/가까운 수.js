//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
    let diff = 0;
    let result = 0;

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
