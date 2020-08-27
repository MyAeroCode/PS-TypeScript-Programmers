export function solution(str: string): string {
    return str
        .split(" ")
        .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1).toLowerCase())
        .join(" ");
}
