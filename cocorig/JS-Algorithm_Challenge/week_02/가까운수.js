//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

//    array	    n	result
// [3, 10, 28]	20	28
// [10, 11, 12]	13	12

//3, 10, 28 중 20과 가장 가까운 수는 28입니다.
//10, 11, 12 중 13과 가장 가까운 수는 12입니다.


function solution(array, n) {
  array.sort((a,b)=> a-b);
  //console.log(array)
  let arr =[]
  let a = 0;
  let b = 0;
  for(let i = 0; i< array.length; i++){
     arr.push(Math.abs(n - array[i]))
     a =  Math.min(...arr) //가장 작은값
     b = arr.indexOf(a) //최소값이 담긴 index를 찾아라 
     
  }
  return (array[b])
}     

// 잘못된 코드
// function solution(array, n) {
//   let arr = []
//   array.sort((a,b)=> a - b);
//   for(let i=0; i< array.length; i++){
//   arr.push(Math.abs(n - array[i])) ; 
//   // console.log(arr); //[ 17, 10, 8 ]

//   let min  = Math.min(...arr);  // 8
//   let indx =  arr.indexOf(min)
//   return array[indx];
// }
// }     
// console.log(solution(	[10, 11, 12], 13));

// 20과 가까운 수를 찾으려면 원소를 뺘봐여함
// 20 - 3 = 17
// 20 - 10 = 10
// 28 - 20 = 8 .. 결과 값이 가장 작은게 가까운 수

// 13과 가까운 수를 찾으려면
// 13 - 10 = 3
// 11 - 10 = 1 // 가까운 수
// 12 - 10 = 2
// 예외상황 - > 13 - 20 =  -7 이때 절대값으로 양수가 나오게 해줘야함