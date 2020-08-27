export function solution(n: number): number {
    const acc = [...Array(n + 2).keys()].map((v, i, arr) => {
        return (arr[i] = (arr[i - 1] || 0) + v);
    });

    let l = 0;
    let r = 0;
    let answer = 0;
    while (true) {
        if (acc[r] - acc[l] < n) ++r;
        else if (acc[r] - acc[l] > n) ++l;
        else {
            ++answer;
            ++l;
            if (l === r) break;
        }
    }
    return answer;
}
