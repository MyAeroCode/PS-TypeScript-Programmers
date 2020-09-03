//
// 카탈란 수열
export function solution(n: number): number {
    const cache = { 0: 1, 1: 1 } as { [key: number]: number };
    function solve(x: number) {
        if (cache[x]) return cache[x];
        let answer = 0;
        for (let m = 0; m < x; m++) {
            answer += solve(m) * solve(x - m - 1);
        }
        return (cache[x] = answer);
    }
    return solve(n);
}
