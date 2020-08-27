export function solution(n: number): number {
    const q = [0, 1, 1];
    while (n-- !== 2) {
        q[0] = q[1];
        q[1] = q[2];
        q[2] = (q[0] + q[1]) % 1234567;
    }
    return q[2];
}
