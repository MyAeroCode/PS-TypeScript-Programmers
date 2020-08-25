export function solution(numbers: number[], target: number): number {
    const queue: number[][] = [[0], []];
    for (let i = 0; i < numbers.length; i++) {
        const thisQueue = (i + 0) % 2;
        const nextQueue = (i + 1) % 2;
        const thisValue = numbers[i];
        for (const untilNow of queue[thisQueue]) {
            queue[nextQueue].push(untilNow + thisValue);
            queue[nextQueue].push(untilNow - thisValue);
        }
        queue[thisQueue] = [];
    }

    const lastQueue = queue[numbers.length % 2];
    return lastQueue.filter((n) => n === target).length;
}
