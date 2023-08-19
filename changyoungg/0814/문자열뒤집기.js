function solution(my_string) {
    var answer = '';
    let a = my_string.split("")
    for (i=a.length-1; i>=0; i--){
        answer += a[i]
    }
    return answer;
}