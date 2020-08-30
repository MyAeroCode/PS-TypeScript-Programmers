export function solution(n: number, money: number[]) {
    money.sort((a, b) => a - b);

    const cache = new Array(n + 1).fill(0) as number[];
    for (const m of money) {
        const acc = new Array(m).fill(0) as number[];

        for (let i = 1; i <= n; i++) {
            const r = i % m;
            const nextAcc = acc[r] + cache[i];
            cache[i] = cache[i] + acc[r] + (r === 0 ? 1 : 0);
            acc[r] = nextAcc;
        }
    }

    return cache[n];
}
