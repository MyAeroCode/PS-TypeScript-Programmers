export function solution(n: number): string {
    return `${"수박".repeat(n >> 1)}${"수".repeat(n % 2)}`;
}
