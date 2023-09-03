function solution(board) {
    let newBoard = [...board];
    const rows = board.length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            console.log(`board[${i}][${j}] ::`, board[i][j]);

            if (board[i][j] === 1) {
                if (i === 0 && j === 0) {
                    //첫번째 행 && 첫번째 열
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                } else if (i === 0 && j === rows - 1) {
                    //첫번째 행 && 마지막 열
                    newBoard[i][j - 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j - 1] = true;
                } else if (i === 0) {
                    //첫번째 행
                    newBoard[i][j - 1] = true;
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j - 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                } else if (i === rows - 1 && j === 0) {
                    //마지막 행 && 첫번째 열
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j + 1] = true;
                } else if (i === rows - 1 && j === rows - 1) {
                    //마지막 행 && 마지막 열
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i][j - 1] = true;
                } else if (i === rows - 1) {
                    //마지막 행
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j - 1] = true;
                    newBoard[i][j + 1] = true;
                } else if (j === 0) {
                    //첫번째 열
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                } else if (j === rows - 1) {
                    //마지막 열
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i][j - 1] = true;
                    newBoard[i + 1][j - 1] = true;
                    newBoard[i + 1][j] = true;
                } else {
                    newBoard[i - 1][j - 1] = true;
                    newBoard[i - 1][j] = true;
                    newBoard[i - 1][j + 1] = true;
                    newBoard[i][j - 1] = true;
                    newBoard[i][j + 1] = true;
                    newBoard[i + 1][j - 1] = true;
                    newBoard[i + 1][j] = true;
                    newBoard[i + 1][j + 1] = true;
                }
            }
        }
    }
    console.log(newBoard);
}
solution(board);
