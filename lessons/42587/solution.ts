export function solution(
    priorities: number[],
    targetLocation: number,
): number {
    const queue = priorities
        .map((p, i) => ({ p, i }))
        .filter(({ p }) => priorities[targetLocation] <= p);

    let cnt = 0;
    while (true) {
        const nextDoc = queue.shift()!;
        if (queue.filter((doc) => nextDoc.p < doc.p).length) {
            queue.push(nextDoc);
        } else {
            cnt++;
            if (nextDoc.i === targetLocation) return cnt;
        }
    }
}
