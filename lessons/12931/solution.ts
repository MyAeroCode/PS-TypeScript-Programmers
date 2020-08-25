export function solution(n: number): number {
    let ans = 0;
    while (n) {
        const lastDigit = n % 10;
        ans += lastDigit;
        n = (n - lastDigit) / 10;
    }
    return ans;
}
