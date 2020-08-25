export function solution(triangle: number[][]): number {
    //
    // cache[i][j] => (i, j)에서 시작해서 만들 수 있는 숫자의 최대값
    const cache = triangle.map((_) => [] as number[]);

    //
    // triangle[i][j]에서 시작해서 거쳐간 숫자의 최대값
    function slv(i: number, j: number): number {
        if (cache[i][j] !== undefined) return cache[i][j];
        const n = triangle[i][j];
        if (i === triangle.length - 1) return n;
        const ans = n + Math.max(slv(i + 1, j), slv(i + 1, j + 1));
        return (cache[i][j] = ans);
    }

    return slv(0, 0);
}
