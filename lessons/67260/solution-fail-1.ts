//
// 마지막 효율성 2문제 실패.
type Tuple = [number, number];
function solution(n: number, path: Tuple[], _order: Tuple[]): boolean {
    //
    // 재귀적으로 표현된 동굴을 생성한다.
    class Tree {
        value: number;
        child: Tree[] = [];
        constructor(value: number) {
            this.value = value;
        }
    }
    const trees = [...new Array(n).keys()].map((i) => new Tree(i));
    path.forEach(([a, b]) => {
        trees[a].child.push(trees[b]);
        trees[b].child.push(trees[a]);
    });

    //
    // 전역 탐색
    const isChecked = new Set<number>();
    const order = new Map(_order); // order.get(n) => n번에 접근함으로써, 접근조건이 해방된 방의 번호
    const locked = new Set(_order.map(([srt, end]) => end)); // 아직 접근할 수 없는 방의 번호
    const blocked = new Set<number>(); // 진행중 블럭된 방의 번호
    const queue = [trees[0]] as Tree[];
    while (queue.length) {
        const thisTree = queue.shift()!;
        const { value, child } = thisTree;
        if (isChecked.has(value)) continue;
        isChecked.add(value);

        //
        // 해당 서브트리의 루트가 잠겨있는지 검사한다.
        if (locked.has(value)) {
            blocked.add(value);
        } else {
            queue.push(...child.filter((t) => !isChecked.has(t.value)));

            //
            // 이것이 다른 루트의 접근조건이라면,
            // blockedBy에서 해당 루트에 의해 잠겨진 모든 트리를 다시 큐에 넣는다.
            if (order.has(value)) {
                const unlocked = order.get(value)!;
                locked.delete(unlocked);
                if (blocked.has(unlocked)) {
                    queue.push(trees[unlocked]);
                    blocked.delete(unlocked);
                }

                //
                // 블럭에서 벗어났기 때문에 isChecked에서 제거해야 한다.
                isChecked.delete(unlocked);
            }
        }
    }
    return blocked.size === 0;
}
