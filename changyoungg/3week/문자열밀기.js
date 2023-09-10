function solution(A, B) {
    var answer = 0;
    let aPush = A.split("");
    if (A == B) {
            return answer = 0;
        }
    for(let i=0; i< A.length; i++) {
        aPush.unshift(aPush[A.length-1]);
        aPush.pop();
        console.log(aPush);
        console.log(B.split(""));
        if (aPush.join("") === B) {
            return answer = i+1;
        }
    }
    return answer = -1;
}