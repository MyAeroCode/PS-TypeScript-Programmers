export function solution(n: number, s: number): number[] {
    const q = Math.floor(s / n);
    const r = s % n;
    return q === 0
        ? [-1]
        : new Array().concat(new Array(n - r).fill(q)).concat(new Array(r).fill(q + 1));
}
