function solution(board) {
		
	// 지뢰가 있는 곳과 주변의 인덱스를 키로 갖는 객체를 만들기 위해 빈 객체 선언
    let obj = {};

    // 입력받은 이중배열의 길이만큼 반복
    for( let i = 0; i < board.length; i++){
        for (let j = 0; j < board.length; j++) {

			// 지뢰를 만난 경우
            if( board[i][j] === 1 ) {
								
				// 끝 부분을 넘어서는 곳을 제외하기 위해 변수 선언	
                const minusI = i - 1 < 0 ? i : i - 1;
                const plusI = i + 1 >= board.length ? i : i + 1 ;
                const minusJ = j - 1 < 0 ? j : j - 1;
                const plusJ = j + 1 >= board.length ? j : j + 1;

				// 지뢰의 왼쪽 위 
                obj[minusI + "" + minusJ] = 1


				// 지뢰의 위
                obj[minusI + "" + j] = 1


				// 지뢰의 오른쪽 위 
                obj[minusI + "" + plusJ] = 1


				// 지뢰의 왼쪽
                obj[i + "" + minusJ] = 1


				// 지뢰
                obj[i + "" + j] = 1


				// 지뢰의 오른쪽 
                obj[i + "" + plusJ] = 1


				// 지뢰의 왼쪽 아래 
                obj[plusI + "" + minusJ] = 1


				// 지뢰의 아래
                obj[plusI + "" + j] = 1


				// 지뢰의 오른쪽 아래
                obj[plusI + "" + plusJ] = 1
            }
        }
    }    
		
	// 키 값만 배열로 생성
    const res = Object.keys(obj);
    console.log(res);

	// 키 값으로 생성한 배열의 길이를 전체 보드칸 수에서 빼 안전지대 구함!
    const answer = (board.length * board.length) - res.length;

    return answer;

}