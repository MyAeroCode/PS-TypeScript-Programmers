//
// 효율성 테스트 - 시간초과
export function solution(k: number, requests: number[]): number[] {
    //
    // 할당되는 전체 방 번호의 집합 (오름차순으로 정렬되어 있음)
    let last = 0;
    const remains = requests
        .reduce((obj, request) => {
            obj[request] = (obj[request] || 0) + 1;
            return obj;
        }, [] as number[])
        .flatMap((cnt, n) => {
            const base = Math.max(last, n);
            const group = [...Array(cnt).keys()].map((i) => base + i);
            last = base + cnt;
            return group;
        });

    //
    // 남아있는 방에서 n보다 같거나 큰 첫번째 방의 번호를 추출한다.
    function extract(n: number): number {
        //
        // lowerBound
        let srt = 0;
        let end = remains.length;
        let idx = 0;
        while (srt < end) {
            const mid = (srt + end) >> 1;
            if (n <= remains[mid]) {
                idx = mid;
                end = mid;
            } else {
                srt = mid + 1;
            }
        }

        //
        // idx 번째의 방 번호를 얻고, remains에서 제거한다.
        const extracted = remains[idx];
        remains.splice(idx, 1);
        return extracted;
    }

    return requests.map(extract);
}
