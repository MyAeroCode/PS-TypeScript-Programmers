export function solution(n: number): number {
    let arr = [0, 1, 1];
    let k = 1;
    while (n !== k) {
        const next = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = arr[2];
        arr[2] = next;
        ++k;
    }
    return arr[2];
}

//
// 효율성 테스트 실패
// 메모리 제한이 빡센 듯.
export function solution1(n: number): number {
    const cache = { 1: 1, 2: 2 } as { [w: number]: number };
    function solve(w: number): number {
        if (cache[w] !== undefined) return cache[w];
        return (cache[w] = (solve(w - 1) + solve(w - 2)) % 1000000007);
    }
    return solve(n);
}
