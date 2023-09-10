function solution(emergency) {
    var answer = [];
    let arr = [...emergency];
    emerSortOrd = arr.sort((a,b) => b - a);
    console.log(emergency);
    answer = emergency.map((v) => emerSortOrd.indexOf(v)+1);
    return answer;
}