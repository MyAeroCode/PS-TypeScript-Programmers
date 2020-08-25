export function solution(x: number, n: number): number[] {
    return [...Array(n).keys()].map((v) => x * (v + 1));
}
