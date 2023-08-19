function solution(my_string, letter) {
    var answer = '';
    var a = my_string.split("");
    for (i=0; i<my_string.length; i++){
        if(a[i] !== letter) {
            answer += a[i];
        }
    }
    return answer;
}