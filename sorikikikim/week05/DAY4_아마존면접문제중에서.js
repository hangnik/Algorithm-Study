// 다음과 같은 형태의 배열을
// > [a1,a2,a3...,an,b1,b2...bn]

// 다음과 같은 형태로 바꾸시오
// > [a1,b1,a2,b2.....an,bn]

const solution = (arr) => {
    const lengthHalf = arr.length / 2;
    let newArr = [];
    for (let i = 0; i < lengthHalf; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i + lengthHalf]);
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(newArr[i]);
    }
};

let arr = ["a1", "a2", "a3", "a4", "a5", "a6", "b1", "b2", "b3", "b4", "b5", "b6"];
solution(arr);
