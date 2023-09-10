const arr = [1,2,3,4,1,2,3,4];

function solution(arr){

const a = arr.slice(0, arr.indexOf(4)+1);

const b = arr.slice(arr.indexOf(4)+1);

const answer = [];

for(let i = 0; i<a.length; i++){
    answer.push(a[i]);
    answer.push(b[i]);
}

return answer;

}

console.log(solution(arr));
