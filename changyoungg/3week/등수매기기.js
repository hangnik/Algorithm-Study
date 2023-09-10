function solution(score) {
    var answer = [];
    let scorePlus = [];
    score.forEach(e => {
        let num = 0;
        e.forEach(v => {
            num += v;
        })
        scorePlus.push(num);  
    })
    let scoreSort = scorePlus.slice("").sort((a, b) => b - a);
    for(let i=0; i<scorePlus.length; i++) {
        for(let j=0; j<scoreSort.length; j++) {
            if(scorePlus[i] === scoreSort[j]) {
                answer.push(scoreSort.indexOf(scoreSort[j])+1);
                break;
            }
        }
    }
    return answer;
}