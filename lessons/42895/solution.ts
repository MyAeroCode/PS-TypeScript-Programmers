export function solution(N: number, num: number): number {
    //
    // count[val] => val을 만들기 위한 최소횟수. 만난적이 없다면 undefined.
    // cache[cnt] => cnt번의 N을 사용하여 만들 수 있는 모든 숫자가 담긴 배열.
    const count: number[] = [];
    const cache: number[][] = [];
    for (let i = 1, v = 0; i <= 8; i++) {
        v = v * 10 + N;
        if (v === num) return i;
        cache[i] = [v];
        count[v] = i;
    }

    //
    // 아래서부터 차근차근 위로 쌓아올리며 count와 cache를 완성한다.
    for (let i = 2; i <= 8; i++) {
        for (let j = 1; j <= i - 1; j++) {
            for (let k = 1; k <= i - 1; k++) {
                if (8 < j + k) break;
                for (const n1 of cache[j]) {
                    for (const n2 of cache[k]) {
                        //
                        // n1과 n2를 사용하여 만들 수 있는 숫자를 생성한다.
                        const nextVals = [
                            n1 + n2,
                            n1 - n2,
                            n2 - n1,
                            n1 * n2,
                            Math.floor(n1 / n2),
                            Math.floor(n2 / n1),
                        ];

                        //
                        // 이미 발견된 원소는 무시한다.
                        for (const val of nextVals) {
                            if (count[val] !== undefined) {
                                continue;
                            }
                            const cnt = j + k;
                            if (val === num) {
                                return cnt;
                            }
                            count[val] = cnt;
                            cache[cnt].push(val);
                        }
                    }
                }
            }
        }
    }

    //
    // 여기에 없다면 8번 이상 사용해야만 하는 숫자이다.
    return count[num] ? count[num] : -1;
}
