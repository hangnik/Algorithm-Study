// 문제 설명
// 문자열 s가 매개변수로 주어집니다.s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 제한사항
// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.

// 입출력 예
// s	         result
// "abcabcadc"	 "d"
// "abdc"	     "abcd"
// "hello"	     "eho"



const s = 'abcabcadc';
const dict = {};

// dict에 각 스펠링 별 등장 횟수 정리
const count = s.split('').forEach(a => dict[a] !== undefined ? dict[a] += 1 : dict[a] = 1);
console.log(dict);

// 등장 횟수가 한 번인 문자를 오름차순 정렬
const answer = Object.entries(dict).map(v => v[1] === 1 ? v[0] : null).filter(v => v !== null).sort().join('');

console.log(answer);

function solution(s) {
    const dict = {};
    s.split('').forEach(a => dict[a] !== undefined ? dict[a] += 1 : dict[a] = 1);
    return Object.entries(dict).map(v => v[1] === 1 ? v[0] : null).filter(v => v !== null).sort().join('');
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));


// 개념 정리

// forEach 메서드 - 주어진 함수를 배열 요소 각각에 대해 실행

// dict[a] - 객체의 속성 이름이 변수명 규칙을 지켰다면 대괄호 []를 사용하여 속성에 접근 가능

// 화살표 함수 - 인수가 하나일 경우 인수를 감싸는 괄호를 생략할 수 있다. 본문이 한 줄인 함수를 작성할 때 유용하다. 본문이 여러줄일 경우 중괄호를 사용해야 하며 이 경우 반드시 return 값이 있어야 한다.

// Object.entries() 메서드는 for...in 과 같은 순서로 주어진 객체 자체의 enumberable(셀 수 있는) 속성[key,value] 쌍의 배열을 반환한다.