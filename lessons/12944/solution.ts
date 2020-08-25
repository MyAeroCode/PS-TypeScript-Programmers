export function solution(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b) / numbers.length;
}
