//
// https://leedakyeong.tistory.com/entry/백준-python-11729번-하노이-탑-이동-순서hanoi-top-in-python
export function solution(n: number): number[][] {
    const history = [] as number[][];

    function solve(n: number, t1: number, t2: number, t3: number) {
        if (n === 1) {
            history.push([t1, t3]);
        } else {
            solve(n - 1, t1, t3, t2);
            history.push([t1, t3]);
            solve(n - 1, t2, t1, t3);
        }
    }
    solve(n, 1, 2, 3);
    return history;
}
