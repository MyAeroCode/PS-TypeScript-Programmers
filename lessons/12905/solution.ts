export function solution(board: number[][]): number {
    const W = board[0].length;
    const H = board.length;

    //
    // Min(왼쪽위, 왼쪽, 위) + 1
    let answer = 0;
    for (let y = 0; y < H; ++y) {
        for (let x = 0; x < W; ++x) {
            if (board[y][x] === 0) continue;
            board[y][x] =
                Math.min(
                    board[y - 1] ? board[y - 1][x - 1] || 0 : 0, // 왼쪽 위
                    board[y - 1] ? board[y - 1][x] || 0 : 0, // 위
                    board[y] ? board[y][x - 1] || 0 : 0, // 왼쪽
                ) + 1;
            if (answer < board[y][x]) answer = board[y][x];
        }
    }
    return answer ** 2;
}
