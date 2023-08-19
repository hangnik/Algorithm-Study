function solution(order) {
    var answer = 0;
    order = order.toString();
    for (let i=0; i<order.length; i++) {
        console.log(order[i]);
        if (order[i]%3 === 0 && order[i] !== "0") {
            answer += 1
        } 
    }
    return answer;
}