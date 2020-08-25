export function solution(str: string): string {
    return str
        .split("")
        .sort((a, b) => (a === b ? 0 : a < b ? +1 : -1))
        .join("");
}
