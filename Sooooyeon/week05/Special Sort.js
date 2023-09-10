const arr = [-1,1,3,-2,2,0];

function solution(arr){

const negativeNum = [];
const positiveNum = [];
const zero = [];

arr.forEach(v=>{
    if( v < 0){
        negativeNum.push(v);
    } else if (v > 0){
        positiveNum.push(v);
    } else {
        zero.push(v);
    }
})

return negativeNum.concat(zero).concat(positiveNum);

}

console.log(solution(arr));