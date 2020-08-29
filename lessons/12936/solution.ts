export function solution(n: number, k: number): number[] {
    k -= 1;

    function factorial(a: number): number {
        if (a === 0) return 1;
        let f = 1;
        for (let i = 1; i <= a; i++) f *= i;
        return f;
    }

    function solve(remainElems: number[], remainK: number): number[] {
        if (remainK === 0) return remainElems;
        const remainN = remainElems.length;
        const groupSize = factorial(remainN - 1);
        for (let i = 0; i < remainN; i++) {
            const upperBound = (i + 1) * groupSize;
            if (remainK < upperBound) {
                const pick = remainElems[i];
                remainElems.splice(i, 1);
                return [pick, ...solve(remainElems, remainK - i * groupSize)];
            }
        }
        throw new Error();
    }

    return solve(
        [...new Array(n).keys()].map((k) => k + 1),
        k,
    );
}
