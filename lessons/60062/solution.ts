export function solution(n: number, weaks: number[], dist: number[]): number {
    dist.sort((a, b) => b - a);

    const isVisited = new Set();
    class State {
        remainWeaks: number[];
        fromDistIdx: number;
        constructor(weak: number[], fromDistIdx = 0) {
            this.remainWeaks = weak;
            this.fromDistIdx = fromDistIdx;
        }

        getKey() {
            return `${this.remainWeaks.join()}-${this.fromDistIdx}`;
        }

        isDone() {
            return this.remainWeaks.length === 0;
        }

        removeWeak(s: number, e: number): number[] {
            const dist = e - s;
            if (0 < dist) {
                //
                // 시계
                return this.remainWeaks.filter((w) => {
                    if (s <= w + 0 && w + 0 <= e) return false;
                    if (0 <= w + n && w + n <= e) return false;
                    return true;
                });
            } else {
                // 반시계
                return this.remainWeaks.filter((w) => {
                    if (e <= w - 0 && w - 0 <= s) return false;
                    if (e <= w - n && w - n <= n) return false;
                    return true;
                });
            }
        }

        createNextStates() {
            const nextLongDist = dist[this.fromDistIdx];
            const nextStates = [];
            if (nextLongDist) {
                for (const w of this.remainWeaks) {
                    const nextStateCandidates = [
                        new State(
                            this.removeWeak(w, w + nextLongDist),
                            this.fromDistIdx + 1,
                        ),
                        new State(
                            this.removeWeak(w, w - nextLongDist),
                            this.fromDistIdx + 1,
                        ),
                    ];
                    for (const nextState of nextStateCandidates) {
                        const nextStateKey = nextState.getKey();
                        if (!isVisited.has(nextStateKey)) {
                            isVisited.add(nextStateKey);
                            nextStates.push(nextState);
                        }
                    }
                }
            }
            return nextStates;
        }
    }

    const queue = [new State(weaks, 0)];
    while (true) {
        const thisState = queue.shift();
        if (thisState === undefined) break;
        if (thisState.isDone()) {
            const answer = thisState.fromDistIdx;
            return answer;
        }
        queue.push(...thisState.createNextStates());
    }
    return -1;
}
