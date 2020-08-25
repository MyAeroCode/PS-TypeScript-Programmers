export function solution(str: string): boolean {
    return /^[0-9]+$/gi.test(str) && (str.length === 4 || str.length === 6);
}
