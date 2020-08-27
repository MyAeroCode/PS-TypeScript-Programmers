export function solution(arr: number[]): number {
    function gcd(a: number, b: number): number {
        const mx = Math.max(a, b);
        const mi = Math.min(a, b);
        return mi === 0 ? mx : gcd(mi, mx % mi);
    }
    return arr.reduce((p, c) => (p * c) / gcd(p, c));
}
