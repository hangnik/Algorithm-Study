//약수의 합 
function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum;
}




//자릿수 더하기 
function solution(N) {
  
    let strN = String(N);
    
    let sum = 0;
    for(let i = 0; i < strN.length; i++) {
        sum += parseInt(strN[i]);
    }

    return sum;
}

console.log(solution(123));