function solution(n) {
    var answer = 0;
    let a = (n + " ").split("");
    console.log((n + " ").split(""))
    for (let i=0; i<a.length-1; i++) {
        answer += Number(a[i])
    }
    return answer;
}