// 문제 설명
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 중복된 원소는 없습니다.
// 1 ≤ emergency의 길이 ≤ 10
// 1 ≤ emergency의 원소 ≤ 100

// 입출력 예
// emergency	           result
// [3, 76, 24]             [3, 1, 2]
// [1, 2, 3, 4, 5, 6, 7]   [7, 6, 5, 4, 3, 2, 1]
// [30, 10, 23, 6, 100]    [2, 4, 3, 5, 1]



const emergency = [30, 10, 23, 6, 100]

// emergency 배열을 내림차순으로 정렬
const arr = [...emergency].sort((a, b) => b - a);
console.log(arr);

// 원본 배열의 요소를 정렬된 배열에서의 몇 번째 인덱스인지 판별 그리고 응급도 순서는 1부터니까 1 더해주기
console.log(emergency.map(a => arr.indexOf(a) + 1));

function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a, b) => b - a)
    return emergency.map(a => sortedEmergency.indexOf(a) + 1)
}



// 개념 정리

// 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수(함수로 호출할 경우) 또는 요소(배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있다.

// map()메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환. map (a, _) _ 표기 안하고 사용해도 무방!