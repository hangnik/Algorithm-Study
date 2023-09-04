function solution(lines) {
    var answer = 0;
    let linesArray = lines.flat().sort((a, b) => a-b);
    let newObj = {};
    
    for(let i=linesArray[0]; i<=linesArray[linesArray.length-1]; i++) {
        newObj[i] = 0;
    }
    for(let i=0; i<lines.length; i++) {
        for(let j=lines[i][0]; j<lines[i][1]; j++) {
            newObj[j] += 1;
        }
    }
    for(let i=linesArray[0]; i<linesArray[linesArray.length-1]; i++) {
        if(newObj[i] > 1) {
            answer += 1;
        }
    }
    return answer;
}