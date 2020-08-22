export function solution(brown: number, yellow: number): number[] {
    for (let i = 0; i <= Math.sqrt(yellow); i++) {
        if (yellow % i !== 0) continue;
        const w = yellow / i + 2;
        const h = i + 2;
        if (w * h === brown + yellow) return [w, h];
    }
    throw new Error();
}
