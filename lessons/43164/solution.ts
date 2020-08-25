export function solution(tickets: string[][]): string[] {
    //
    // 목적지를 사전순으로 정렬하고,
    // 차례차례로 isConnected[startAirport]에 push한다.
    const isConnected = {} as { [key: string]: string[] };
    tickets
        .sort((a, b) => (a[1] < b[1] ? -1 : +1))
        .forEach(([srt, end]) => {
            if (isConnected[srt] === undefined) isConnected[srt] = [];
            if (isConnected[end] === undefined) isConnected[end] = [];
            isConnected[srt].push(end);
        });

    //
    // 재귀적으로 답을 찾는다.
    let answer: string[] = [];
    function solve(untilNow: string[]) {
        //
        // 중간에 답을 찾았다면 중단한다.
        if (answer.length) return;

        //
        // 최초 정답이 사전순으로 가장 빠른 정답이다.
        if (untilNow.length === tickets.length + 1) {
            answer = untilNow;
            return;
        }

        //
        // 사용되지 않은 다음 목적지로 이동한다.
        const lastAirport = untilNow[untilNow.length - 1];
        for (let i = 0; i < isConnected[lastAirport].length; i++) {
            const nextAirport = isConnected[lastAirport][i];
            if (nextAirport === "") continue;
            isConnected[lastAirport][i] = "";
            solve([...untilNow, nextAirport]);
            isConnected[lastAirport][i] = nextAirport;
        }
    }
    solve(["ICN"]);
    return answer;
}
