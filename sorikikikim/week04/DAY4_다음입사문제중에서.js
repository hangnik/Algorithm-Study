/*
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
*/

const solution = S => {
	let min = S[1] - S[0];
	let result = [];
	for (let i = 0; i < S.length - 1; i++) { 
		for (let j = 1; j < S.length; j++) { 
			let temp = Math.abs(S[i] - S[j]); 
			if (temp < min && S[i] != S[j]) { 
				result = [S[i], S[j]]  
			}
		}
	}
	console.log(result)
}

let arr = [1, 3, 4, 8, 13, 17, 20]
solution(arr)