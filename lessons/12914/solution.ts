export function solution(n: number): number {
    const cache = {} as { [key: number]: number };

    //
    // 피보나치
    function solve(remainN: number): number {
        if (remainN === 1) return 1;
        if (remainN === 2) return 2;
        if (remainN === 3) return 3;
        if (cache[remainN] !== undefined) return cache[remainN];
        return (cache[remainN] = (solve(remainN - 1) + solve(remainN - 2)) % 1234567);
    }
    return solve(n);
}
