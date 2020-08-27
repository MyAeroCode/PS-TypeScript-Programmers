export function solution(str: string): number {
    const s = [] as string[];
    for (const c of str) {
        s[s.length - 1] === c ? s.pop() : s.push(c);
    }
    return s.length ? 0 : 1;
}
