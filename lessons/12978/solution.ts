//
// BFS
export function solution(N: number, roads: number[][], K: number): number {
    const link = {} as { [srt: number]: { [end: number]: number } };
    for (const [srt, end, time] of roads) {
        if (link[srt] === undefined) link[srt] = [];
        if (link[end] === undefined) link[end] = [];
        if (link[srt][end] === undefined || time < link[srt][end]) {
            link[srt][end] = time;
            link[end][srt] = time;
        }
    }

    const queue = [{ town: 1, cost: 0 }];
    const cost = Array(N + 1).fill(Infinity);
    cost[0] = cost[1] = 0;
    while (queue.length) {
        const thisBranch = queue.shift()!;

        //
        // 그 사이에 더 짧은 경로가 발견되었다면,
        // 해당 브런치는 중지되어야 한다.
        if (cost[thisBranch.town] < thisBranch.cost) continue;

        //
        // 연결된 마을에 대해 다음 도착시간을 계산하고,
        // 기존의 최솟값보다 높아진 마을로는 이동하지 않는다.
        for (const _nextTown of Object.keys(link[thisBranch.town])) {
            const nextTown = Number(_nextTown);
            const nextTime = thisBranch.cost + link[thisBranch.town][nextTown];
            if (nextTime <= K && nextTime < cost[nextTown]) {
                cost[nextTown] = nextTime;
                queue.push({
                    town: nextTown,
                    cost: nextTime,
                });
            }
        }
    }

    return cost.slice(1).filter((t) => t <= K).length;
}
