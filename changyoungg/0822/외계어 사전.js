function solution(spell, dic) {
    var answer = 0;
    let spellSort = spell.sort().join("");
    for (let i=0; i<dic.length; i++) {
        let dicSort = dic[i].split("").sort().join("");
        if (dicSort == spellSort) {
            return answer = 1;
        } else {
            answer = 2;
        }
    }
    return answer;
}