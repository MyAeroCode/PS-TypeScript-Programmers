type Dir = "↑" | "↓" | "←" | "→";
type Delta = { dy: number; dx: number; dir: Dir; forbidden: Dir };

export function solution(board: number[][]): number {
    const N = board.length;
    const delta: Delta[] = [
        { dy: +1, dx: 0, dir: "↓", forbidden: "↑" },
        { dy: -1, dx: 0, dir: "↑", forbidden: "↓" },
        { dy: 0, dx: -1, dir: "←", forbidden: "→" },
        { dy: 0, dx: +1, dir: "→", forbidden: "←" },
    ];
    const minCost = new Map<string, number>();
    class State {
        constructor(
            readonly y: number,
            readonly x: number,
            readonly prevDir: Dir,
            readonly cost: number,
        ) {}

        getKey() {
            return [this.y, this.x, this.prevDir].join();
        }

        isVaild() {
            return !(
                this.y < 0 ||
                this.x < 0 ||
                N <= this.y ||
                N <= this.x ||
                board[this.y][this.x] === 1 ||
                (minCost.has(this.getKey()) && minCost.get(this.getKey())! <= this.cost)
            );
        }

        regist() {
            minCost.set(this.getKey(), this.cost);
        }
    }

    //
    // BFS
    const queue: State[] = [new State(0, 0, "↓", 0), new State(0, 0, "→", 0)];
    while (queue.length) {
        const thisState = queue.shift()!;
        if (thisState.isVaild()) {
            thisState.regist();
            const { y, x, prevDir, cost } = thisState;
            for (const d of delta) {
                if (d.forbidden === thisState.prevDir) continue;
                const { dy, dx } = d;
                const needCost = prevDir === d.dir ? 100 : 600;
                const nextState = new State(y + dy, x + dx, d.dir, cost + needCost);
                if (nextState.isVaild()) {
                    queue.push(nextState);
                }
            }
        }
    }

    //
    // (N-1, N-1)에 도달한 상태 중 최솟값을 반환한다.
    return Math.min(
        ...(delta
            .map((d) => minCost.get([N - 1, N - 1, d.dir].join()))
            .filter((cost) => cost !== undefined) as number[]),
    );
}
