export function solution(srt: number, end: number): number {
    let ans = 0;
    for (let i = Math.min(srt, end); i <= Math.max(srt, end); i++) ans += i;
    return ans;
}
