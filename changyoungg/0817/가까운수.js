function solution(array, n) {
  var answer = 0;
  let a = [];
  let arrSort = array.sort((a, b) => a - b);
  if (array.length == 1) {
    return array[0];
  }
  for (let i = 0; i < array.length; i++) {
    a.push(arrSort[i] - n >= 0 ? arrSort[i] - n : n - arrSort[i]);
  }
  console.log(a);

  let min = a[0];
  for (let j = 1; j < a.length; j++) {
    if (min > a[j]) {
      min = a[j];
    }
  }
  if (min == 0) {
    return n;
  }
  let minArr = [];

  for (let k = 0; k < arrSort.length; k++) {
    if (n - arrSort[k] === min || arrSort[k] - n === min) {
      minArr.push(arrSort[k]);
    }
  }
  minArr.sort((a, b) => a - b);
  return minArr[0];
}

// if (a[j] == 0) {
//     answer = n;
//     console.log(1);
//     break;
// } else if (arrSort[j] < n && a[j] <a[j+1]) {
//     answer = arrSort[j];
//     console.log(a);
//     console.log(arrSort);
//     console.log(2);
//     break;
// } else if (arrSort[j] > n && a[j] <a[j+1]) {
//     answer = arrSort[j];
//     console.log(a);
//     console.log(arrSort);
//     console.log(3);
//     break;
// } else {
//     if (a[arrSort.length-1] == 0 && j == a.length-1){
//         answer = n;
//     }
//     answer = arrSort[arrSort.length-1];
//     console.log(4);
//     continue;
// }
