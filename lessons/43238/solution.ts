export function solution(n: number, times: number[]): number {
    function test(time: number): boolean {
        const processed = times.map((v) => Math.floor(time / v));
        return n <= processed.reduce((a, b) => a + b);
    }

    let s = 0;
    let e = 2;
    let answer = 0;
    while (!test(e)) e = e * 2;
    while (s < e) {
        const mid = Math.floor((s + e) / 2);
        if (test(mid)) {
            answer = mid;
            e = mid;
        } else {
            s = mid + 1;
        }
    }
    return answer;
}
