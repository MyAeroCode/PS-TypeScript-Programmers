export function solution(tokens: string): boolean {
    let level = 0;
    for (const token of tokens) {
        level += token === "(" ? +1 : -1;
        if (level < 0) return false;
    }
    return level === 0;
}
