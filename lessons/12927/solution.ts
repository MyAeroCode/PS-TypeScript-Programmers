export function solution(works: number[], n: number): number {
    const maxHeap = new MaxHeap();
    works.forEach(maxHeap.push);

    for (let i = 0; i < n; i++) {
        const nextMaxWork = maxHeap.pop()!;
        if (nextMaxWork === 0) return 0;
        maxHeap.push(nextMaxWork - 1);
    }

    let acc = 0;
    while (true) {
        const work = maxHeap.pop();
        if (work === undefined) break;
        acc += work ** 2;
    }
    return acc;
}

//
// 최대힙 자료구조
class MaxHeap {
    data = [Infinity];

    constructor() {
        this.swap = this.swap.bind(this);
        this.push = this.push.bind(this);
        this.pop = this.pop.bind(this);
    }

    //
    // data[a]와 data[b]의 위치를 바꾼다.
    swap(a: number, b: number) {
        const { data } = this;
        [data[a], data[b]] = [data[b], data[a]];
    }

    //
    // val를 최대힙에 삽입한다.
    push(val: number) {
        const { data, swap } = this;
        let idx = data.length;
        data[idx] = val;
        while (data[idx >> 1] < data[idx]) {
            swap(idx >> 1, idx);
            idx >>= 1;
        }
    }

    //
    // 힙에 저장된 최댓값을 빼낸다.
    pop(): number | undefined {
        const { data, swap } = this;
        const top = data[1];

        if (data.length === 2) {
            delete data[1];
        } else if (3 <= data.length) {
            data[1] = data[data.length - 1];
            data.splice(data.length - 1, 1);

            let idx = 1;
            while (true) {
                const lval = data[(idx << 1) + 0];
                const rval = data[(idx << 1) + 1];
                const maxVal = Math.max(lval || -Infinity, rval || -Infinity);
                if (data[idx] < maxVal) {
                    if (lval === maxVal) {
                        swap((idx << 1) + 0, idx);
                        idx = (idx << 1) + 0;
                    } else if (rval === maxVal) {
                        swap((idx << 1) + 1, idx);
                        idx = (idx << 1) + 1;
                    }
                } else {
                    break;
                }
            }
        }
        return top;
    }
}
