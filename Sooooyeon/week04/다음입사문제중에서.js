// s=[1,3,4,8,13,17,20];

function solution(s){

const arr = [];
    for(let i =0; i<s.length-1; i++){
        arr.push(s[i+1]-s[i]);
    }

const index = arr.indexOf(Math.min(...arr))

// console.log( "(" + s[answer] + "," + s[answer+1] + ")");
return "(" + s[index] + "," + s[index+1] + ")";

    
}

const res = solution([1,3,4,8,13,17,20]);
console.log(res);



