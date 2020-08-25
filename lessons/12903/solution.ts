export function solution(str: string): string {
    return str.length % 2
        ? str[str.length >> 1]
        : str.substr((str.length >> 1) - 1, 2);
}
