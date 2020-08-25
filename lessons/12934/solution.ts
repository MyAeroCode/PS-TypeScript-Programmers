export function solution(n: number): number {
    const sqrt = Math.floor(Math.sqrt(n));
    return n === sqrt * sqrt ? (sqrt + 1) * (sqrt + 1) : -1;
}
