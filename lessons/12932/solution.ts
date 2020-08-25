export function solution(n: number): number[] {
    return n.toString().split("").reverse().map(Number);
}
