export function solution(stones: number[], k: number): number {
    //
    // 세그먼트 트리의 원리를 사용하여,
    // 구간 [s, e)의 최댓값을 빠르게 반환.
    const N = 2 ** Math.ceil(Math.log2(stones.length));
    const cache = Array(N + 1);
    function queryMax(s: number, e: number, l = 0, r = N, node = 1): number {
        //
        // 구간의 길이가 1인 경우, 배열에서 값을 읽어 반환하고,
        // 캐싱된 구간의 경우, 캐싱된 값을 반환한다.
        if (s === e - 1) return stones[s];
        if (l === s && r === e) {
            if (cache[node] !== undefined) {
                return cache[node];
            }
        }

        //
        // [s, e)를 [l, r)의 중점으로 자르고,
        // 나눠진 구간들 중 가장 큰 값이 [s, e)의 최댓값이다.
        const mid = (l + r) >> 1;
        const childRange = [];
        if (mid <= s) {
            childRange.push(queryMax(s, e, mid, r, node * 2 + 1));
        } else if (e <= mid) {
            childRange.push(queryMax(s, e, l, mid, node * 2 + 0));
        } else {
            childRange.push(queryMax(s, mid, l, mid, node * 2 + 0));
            childRange.push(queryMax(mid, e, mid, r, node * 2 + 1));
        }
        const max = Math.max(...childRange);

        //
        // [s, e)에 매칭되는 노드가 있다면 캐싱한다.
        if (l === s && r === e) {
            cache[node] = max;
        }
        return max;
    }

    //
    // 크기가 k인 구간들의 최댓값중 가장 작은 값을 반환한다.
    let s = 0;
    let e = k;
    let minDurability = Infinity;
    while (e <= stones.length) {
        const localDurability = queryMax(s, e);
        minDurability = Math.min(minDurability, localDurability);
        s++;
        e++;
    }
    return minDurability;
}
