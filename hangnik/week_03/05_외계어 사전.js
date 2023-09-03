function solution(spell, dic) {
  let answer = 0;

  for (let i = 0; i < dic.length; i++) {
    let cnt = 0;

    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) cnt++;
    }

    cnt === spell.length ? (answer = 1) : (answer = 2);
    if (answer === 1) break;
  }
  return answer;
}

solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);
