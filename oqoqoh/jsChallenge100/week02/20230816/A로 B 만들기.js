//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
    let beforeArray = [...before];
    let afterArray = [...after];

    beforeArray.forEach((letter) => {
        let removeIndex = afterArray.indexOf(letter);
        if (removeIndex !== -1) {
            afterArray.splice(removeIndex, 1);
        }
    });

    if (afterArray.length === 0) return 1;
    else return 0;
}

//let solution = (b, a) => Number([...b].sort().join('') === [...a].sort().join(''));
