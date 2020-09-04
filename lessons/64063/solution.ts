//
// 대용량 데이터는 Object, Array보다 Map을 사용할 것.
export function solution(k: number, requests: number[]): number[] {
    const next = new Map<number, number>();
    const answer = requests.map((n) => {
        //
        // 현재 방이 예약되었다면,
        // 비어있는 방이 나올때 까지 재귀적으로 찾는다.
        while (next.has(n)) {
            if (next.has(next.get(n)!)) {
                next.set(n, next.get(next.get(n)!)!);
            }
            n = next.get(n)!;
        }

        //
        // 비어있는 최초의 방을 예약하고,
        // 다음 방을 가르키도록 한다.
        if (next.has(n)) {
            return next.get(n)!;
        } else {
            next.set(n, n + 1);
            return n;
        }
    });
    return answer;
}
