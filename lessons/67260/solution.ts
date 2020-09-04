//
// 전역탐색 대신 order에 대해서만 순회.
// 재귀 대신 순차.
type Tuple = [number, number];
export function solution(n: number, path: Tuple[], _order: Tuple[]): boolean {
    //
    // linked[p] => p번과 연결된 모든 방의 번호.
    const linked = new Map<number, number[]>();
    path.forEach(([x, y]) => {
        if (!linked.has(x)) linked.set(x, []);
        if (!linked.has(y)) linked.set(y, []);
        linked.get(x)!.push(y);
        linked.get(y)!.push(x);
    });

    //
    // 재귀적 트리 구조로 동굴을 표현한다.
    const trees = [] as Tree[];
    class Tree {
        value: number;
        child: Tree[];
        parent?: Tree;
        constructor(current: number, parent?: Tree) {
            this.value = current;
            this.child = linked
                .get(current)!
                .filter((node) => node !== (parent ? parent.value : Infinity))
                .map((child) => new Tree(child, this));
            this.parent = parent;
            trees[current] = this;
        }
    }
    new Tree(0);

    //
    // 불가능한 order를 찾는다.
    const pre2post = new Map(_order);
    const post2pre = new Map(_order.map((o) => o.sort(() => -1)));
    const history = new Set<number>();
    for (const [preVisit, postVisit] of pre2post) {
        history.clear();
        const stacks = [preVisit];

        outloop: while (stacks.length) {
            const lastPreVisit = stacks[stacks.length - 1];

            //
            // 진작에 잠금이 풀린 경우.
            if (!pre2post.has(lastPreVisit)) {
                stacks.pop();
                continue;
            }

            //
            // 이전에 방문한 적이 있다면, 사이클이 생성된 것 이다.
            if (history.has(lastPreVisit)) return false;
            history.add(lastPreVisit);

            //
            // 현재 위치에서부터 루트까지 무사히 올라갈 수 있다면 lock을 해제할 수 있다.
            let cursor = trees[lastPreVisit];
            while (cursor !== undefined) {
                //
                // 중간에 락을 발견했다면, 해당 락을 풀기위한 unlock을 호출한다.
                if (post2pre.has(cursor.value)) {
                    stacks.push(post2pre.get(cursor.value)!);
                    continue outloop;
                }
                cursor = cursor.parent!;
            }

            //
            // 무사히 루트까지 올라왔다.
            stacks.pop();
            const lastPostVisit = pre2post.get(lastPreVisit)!;
            history.delete(lastPreVisit);
            if (stacks[stacks.length - 1]) history.delete(stacks[stacks.length - 1]);
            pre2post.delete(lastPreVisit);
            post2pre.delete(lastPostVisit);
        }
    }
    return true;
}
