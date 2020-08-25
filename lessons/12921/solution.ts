export function solution(n: number): number {
    const isPrime = [false, false];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i] === false) continue;
        for (let m = i * 2; m <= n; m += i) isPrime[m] = false;
        isPrime[i] = true;
    }
    return isPrime.filter((v) => v).length;
}
