export function solution(
    distance: number,
    rocks: number[],
    n: number,
): number {
    rocks.sort((a, b) => a - b);
    rocks.push(distance);

    //
    // 거리의 최솟값이 result가 되려면 몇 번을 제거해야 하는지 시뮬레이션하고,
    // 제거횟수가 n보다 같거나 작아야한다.
    function test(result: number) {
        let removed = 0;
        let prev = 0;
        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - prev < result) {
                removed++;
            } else {
                prev = rocks[i];
            }
        }
        return removed <= n;
    }

    let srt = 0;
    let end = distance;
    let ans = 0;
    while (srt < end) {
        const mid = (srt + end) >> 1;
        if (test(mid)) {
            ans = mid;
            srt = mid + 1;
        } else {
            end = mid;
        }
    }
    return ans;
}
