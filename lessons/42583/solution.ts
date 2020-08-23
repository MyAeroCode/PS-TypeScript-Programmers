export function solution(
    bridgeLength: number,
    maxWeight: number,
    waitingTrucks: number[],
): number {
    //
    // 다리를 통과하고 있는 차량에 대한 큐
    // passing: { t: number; w: number }[]
    //
    //   t = 해당 차량이 완전히 빠져나간 시각
    //   w = 해당 차량의 무게
    const passingQueue: { t: number; w: number }[] = [];

    let elasped = 0;
    let currentWeight = 0;
    for (const truckWeight of waitingTrucks) {
        //
        // 넣을 수 없다면, 넣어질 때 까지 뺀다.
        while (maxWeight < truckWeight + currentWeight) {
            const nextPassed = passingQueue.shift()!;
            if (elasped < nextPassed.t) {
                elasped = nextPassed.t - 1;
            }
            currentWeight -= nextPassed.w;
        }

        //
        // 넣어지는 것이 보장된 이후에 넣는다.
        elasped++;
        currentWeight += truckWeight;
        passingQueue.push({
            t: elasped + bridgeLength,
            w: truckWeight,
        });
    }

    //
    // 가장 마지막의 있는 차량의 빠져나간 시각이 정답이다.
    return passingQueue[passingQueue.length - 1].t;
}
