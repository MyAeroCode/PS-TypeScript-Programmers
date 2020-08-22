export function solution(_numbers: string): number {
    function isPrime(n: number) {
        if (n === 0) return false;
        if (n === 1) return false;
        if (n === 2) return true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const numbers = _numbers.split("").map(Number);
    const isUsed = numbers.map((v) => false);
    const set = new Set();
    function solve(untilNow: number = 0) {
        if (isPrime(untilNow)) set.add(untilNow);
        for (let i = 0; i < isUsed.length; i++) {
            if (isUsed[i] === false) {
                isUsed[i] = true;
                solve(untilNow * 10 + numbers[i]);
                isUsed[i] = false;
            }
        }
    }
    solve();
    return set.size;
}
