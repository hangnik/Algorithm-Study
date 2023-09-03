function solution(A, B) {
  const pushArr = [...A];
  let cnt = 0;

  if (A === B) return 0;

  while (true) {
    const lastStr = pushArr.pop();
    pushArr.unshift(lastStr);
    cnt++;

    if (pushArr.join("") === B) {
      return cnt;
    } else if (pushArr.join("") === A) {
      return -1;
    }
  }
}

solution("abc", "abc");

// let solution=(a,b)=>(b+b).indexOf(a) ??
