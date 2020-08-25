export function solution(p: string): string {
    return `${"*".repeat(p.length - 4)}${p.substring(p.length - 4)}`;
}
