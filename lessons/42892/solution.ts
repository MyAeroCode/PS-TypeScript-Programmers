export function solution(nodeinfo: number[][]): number[][] {
    //
    // 1차적으로 y에 대해 내림차순 정렬.
    // 2차적으로 x에 대해 오름차순 정렬.
    const nodes = nodeinfo
        .map(([x, y], v) => ({ x, y, v: v + 1 }))
        .sort((a, b) => {
            if (a.y !== b.y) return b.y - a.y;
            return a.x - b.x;
        });

    //
    // x좌표와 y좌표의 최댓값을 얻고,
    // y좌표(=레벨) 별로 분리하여 저장.
    let lastY = -1;
    let lastX = -1;
    const levels = [] as { x: number; y: number; v: number }[][];
    for (const node of nodes) {
        if (node.x > lastX) lastX = node.x;
        if (node.y !== lastY) {
            lastY = node.y;
            levels.push([]);
        }
        levels[levels.length - 1].push(node);
    }

    //
    // 위에서 얻어진 levels를 사용하여,
    // 재귀적인 트리를 생성한다.
    class Tree {
        v = 0;
        l = undefined as Tree | undefined;
        r = undefined as Tree | undefined;

        constructor(level: number, lowerBound: number, upperBound: number) {
            const thisNode = levels[level].shift()!;
            this.v = thisNode.v;

            const childLevel = levels[level + 1];
            for (const isLeft of [true, false]) {
                //
                // 다음 자식레벨 노드가 없다면 넘어간다.
                if (childLevel === undefined || childLevel.length === 0) continue;

                //
                // 다음 자식레벨 노드의 x좌표가 범위에 바운드되지 않았다면 넘어간다.
                const childX = childLevel[0].x;
                if (childX < lowerBound || upperBound <= childX) continue;

                //
                // 왼쪽 또는 오른쪽 자식의 조건에 맞는다면,
                // 재귀적인 서브트리를 생성한다.
                if (isLeft && childX < thisNode.x) {
                    this.l = new Tree(level + 1, lowerBound, thisNode.x);
                }
                if (!isLeft && thisNode.x < childX) {
                    this.r = new Tree(level + 1, thisNode.x, upperBound);
                }
            }
        }

        preorder(): number[] {
            return [
                this.v,
                ...(this.l ? this.l.preorder() : []),
                ...(this.r ? this.r.preorder() : []),
            ];
        }

        postorder(): number[] {
            return [
                ...(this.l ? this.l.postorder() : []),
                ...(this.r ? this.r.postorder() : []),
                this.v,
            ];
        }
    }

    const root = new Tree(0, 0, lastX + 1);
    return [root.preorder(), root.postorder()];
}
