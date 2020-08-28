export function solution(N: number, A: number, B: number): number {
    let answer = 0;
    do {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        ++answer;
    } while (A !== B);
    return answer;
}
