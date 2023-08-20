
//특정문자 제거하기

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}




//배열의 유사도 
const solution = (s1, s2) => s1.filter((a,i) => s2.includes(a)).length





//문자열 뒤집기
function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('');
    return answer;
}






//가위바위보 

function solution(rsp) {
    return Array.from(rsp).map(v => {
        switch(+v) {
            case 2:
                return 0
            case 0:
                return 5
            default:
                return 2
        }
    }).join('');
}






//배열 회전 시키기

function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers
}






//외계행성의 나이 
//다른사람의 풀이 
function solution(age) {
    let str = 'abcdefghij'
    return Array.from(age.toString()).map(t=> str[+t]).join('');
}







//369게임 
function solution(order) {
    return [...String(order)].filter((v) => ["3", "6", "9"].includes(v)).length;
  }





  //중복된 문자 제거 
  function solution(my_string) {
    var answer = new Set([...my_string])

    return [...answer].join('');
}









//A로 B만들기 
//다른사람 풀이 참조 
//벌써 너무 어렵기 시작합니다 ㅜㅜㅜ .. 구글링 실력이 늘것 같아요 ... 

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
}









//팩토리얼 
//팩토리얼도 개인적으로 너무 어렵게 느껴졌어요 .. 
//다른분 풀이보고 따라쓰면서 애해했습니다 ...
function solution(n) {
    let ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i;
        
        if(ans === n){
            return i;
        }
        
        if(ans > n){
            return i - 1;
        }
    }
}






//k의 개수 













//가까운 수 