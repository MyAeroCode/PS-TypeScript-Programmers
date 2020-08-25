export function solution(n: number, isConnected: number[][]): number {
    const isChecked = [];

    let networkCnt = 0;
    for (let i = 0; i < n; i++) {
        if (isChecked[i] === true) continue;
        isChecked[i] = true;

        networkCnt++;
        const queue = [i];
        while (queue.length) {
            const thisCom = queue.shift()!;
            for (let nextCom = 0; nextCom < n; nextCom++) {
                if (isChecked[nextCom]) continue;
                if (isConnected[thisCom][nextCom]) {
                    queue.push(nextCom);
                    isChecked[nextCom] = true;
                }
            }
        }
    }
    return networkCnt;
}
