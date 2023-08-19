function solution(s1, s2) {
    var answer = 0;
    for(i=0; i<s1.length; i++){
        for(b=0; b<s2.length; b++){
            if (s1[i] === s2[b]) {
                answer += 1;
            }
        }
    }
    return answer;
}