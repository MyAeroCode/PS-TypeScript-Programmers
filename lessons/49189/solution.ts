export function solution(n: number, v: number[][]): number {
    //
    // 양방향 링크를 생성한다.
    const link = {} as { [srt: number]: Set<number> };
    for (const [a, b] of v) {
        if (link[a] === undefined) link[a] = new Set();
        if (link[b] === undefined) link[b] = new Set();
        link[a].add(b);
        link[b].add(a);
    }

    let answer = 0;
    let lastDist = 0;
    const isChecked = new Set();
    const queue = [{ node: 1, dist: 1 }];
    while (queue.length) {
        const current = queue.shift()!;

        //
        // 이전에 방문한 적이 있다면 무시한다.
        if (isChecked.has(current.node)) continue;
        isChecked.add(current.node);

        //
        // 이전 거리보다 늘어났는지 체크한다.
        if (current.dist !== lastDist) {
            lastDist = current.dist;
            answer = 1;
        } else {
            ++answer;
        }

        //
        // 현재 노드에 연결된 다음 노드로 이동한다.
        for (const nextNode of link[current.node]) {
            //
            // 이 때, 방문한 적이 있던 노드는 무시한다.
            if (isChecked.has(nextNode)) continue;
            queue.push({ node: nextNode, dist: current.dist + 1 });
        }
    }

    return answer;
}
