export function solution(board: number[][], moves: number[]): number {
    moves = moves.map((move) => move - 1);

    const stack = [] as number[];
    for (const move of moves) {
        for (let i = 0; i < board.length; i++) {
            if (0 < board[i][move]) {
                stack.push(board[i][move]);
                board[i][move] = 0;
                break;
            }
        }
    }

    let answer = 0;
    while (true) {
        let abort = true;
        for (let i = 0; i < stack.length - 1; i++) {
            if (stack[i] === stack[i + 1]) {
                answer += 2;
                stack.splice(i, 2);
                abort = false;
                break;
            }
        }
        if (abort) break;
        else continue;
    }
    return answer;
}
