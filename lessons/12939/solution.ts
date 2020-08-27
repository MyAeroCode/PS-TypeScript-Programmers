export function solution(str: string): string {
    return str
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
        .filter((_, i, arr) => i === 0 || i === arr.length - 1)
        .join(" ");
}
