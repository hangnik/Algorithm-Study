function solution(i, j, k) {
    var answer = 0;
    // for(let a=i; a<=j; a++) {
    //     if(a.toString().includes(k) == 1) {
    //         answer += 1;
    //     }
    // }
    
    let arr = [];
    for(let a=i; a<=j; a++) {
        let str = a.toString().split("")
        arr.push(...str);
    }
    for(let b=0; b<arr.length; b++) {
        if (arr[b] == k) {
            answer += 1;
        }
    }
    
    return answer;
}