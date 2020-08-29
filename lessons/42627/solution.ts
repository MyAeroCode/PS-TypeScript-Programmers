export function solution(jobs: number[][]): number {
    const N = jobs.length;
    jobs.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let now = 0;
    let totalWaitingTime = 0;
    const queue = [] as number[][];
    while (true) {
        const optimalJob = queue.shift()!;
        if (optimalJob !== undefined) {
            const done = now + optimalJob[1];
            const waitingTime = done - optimalJob[0];
            console.log(waitingTime);
            totalWaitingTime += waitingTime;
            now = done;
        } else {
            if (jobs.length === 0) break;
            now = jobs[0][0];
        }

        //
        // 도중에 도착한 작업들을 로딩한다.
        let isLoaded = false;
        while (true) {
            const nextJob = jobs[0];
            if (nextJob === undefined || now < nextJob[0]) break;
            queue.push(jobs.shift()!);
            isLoaded = true;
        }
        if (isLoaded) queue.sort((a, b) => a[1] - b[1]);
    }

    return Math.floor(totalWaitingTime / N);
}
solution([
    [0, 3],
    [1, 9],
    [2, 6],
]);
