//
// 효율성 테스트 - 7번만 시간초과
export function solution(k: number, requests: number[]): number[] {
    const next = [] as number[];
    const answer = requests.map((n) => {
        //
        // 현재 방이 예약되었다면,
        // 비어있는 방이 나올때 까지 재귀적으로 찾는다.
        while (next[n]) {
            if (next[next[n]]) {
                next[n] = next[next[n]];
            }
            n = next[n];
        }

        //
        // 비어있는 최초의 방을 예약하고,
        // 다음 방을 가르키도록 한다.
        if (next[n]) {
            return next[n];
        } else {
            next[n] = n + 1;
            return n;
        }
    });
    return answer;
}
