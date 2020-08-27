export function solution(a: number[], b: number[]): number {
    a.sort((x, y) => x - y);
    b.sort((x, y) => y - x);
    return [...Array(a.length + 1).keys()].reduce((p, c) => p + a[c - 1] * b[c - 1]);
}
