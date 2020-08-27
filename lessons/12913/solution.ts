export function solution(land: number[][]): number {
    let acc = [0, 0, 0, 0];
    for (const row of land) {
        const accRank = acc.map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v);
        const nextAcc = [...acc];
        for (let x = 0; x < 4; ++x) {
            const selectedRank = x === accRank[0].i ? 1 : 0;
            nextAcc[x] = accRank[selectedRank].v + row[x];
        }
        acc = nextAcc;
    }
    return Math.max(...acc);
}
