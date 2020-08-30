export function solution(A: number[], B: number[]): number {
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);

    let score = 0;
    while (true) {
        const a = A.pop();
        while (true) {
            const b = B.pop();
            if (a === undefined) return score;
            if (b === undefined) return score;
            if (a < b) {
                ++score;
                break;
            }
        }
    }
}
