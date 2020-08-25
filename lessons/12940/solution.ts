export function solution(n: number, m: number): number[] {
    function lcm(a: number, b: number): number {
        return (a * b) / gcd(a, b);
    }
    function gcd(a: number, b: number): number {
        const min = Math.min(a, b);
        const max = Math.max(a, b);
        return min === 0 ? max : gcd(min, max % min);
    }
    return [gcd(n, m), lcm(n, m)];
}
