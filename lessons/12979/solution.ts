export function solution(N: number, stations: number[], W: number): number {
    const ranges = [] as { srt: number; end: number }[];

    //
    // 기존에 설치된 기지국의 전파 구간을 병합
    ranges.push({ srt: 1, end: 1 });
    for (let i = 0; i < stations.length; i++) {
        const thisStation = stations[i];
        const thisRange = {
            srt: thisStation - W,
            end: thisStation + W + 1,
        };
        if (thisRange.srt < 1) thisRange.srt = 1;
        if (thisRange.end > N + 1) thisRange.end = N + 1;

        const lastRange = ranges[ranges.length - 1];
        if (i !== 0 && thisRange.srt <= lastRange.end) {
            lastRange.end = thisRange.end;
        } else {
            ranges.push(thisRange);
        }
    }
    ranges.push({ srt: N + 1, end: N + 1 });

    //
    // 전파가 닿지 않는 구간을 뽑아내고,
    // 필요한 기지국의 수만큼 answer에 가산.
    let answer = 0;
    const widthPerStation = W * 2 + 1;
    for (let i = 1; i < ranges.length; i++) {
        const thisRange = ranges[i];
        const prevRange = ranges[i - 1];
        const unreachableRangeSize = thisRange.srt - prevRange.end;
        const needMore = Math.ceil(unreachableRangeSize / widthPerStation);
        answer += needMore;
    }
    return answer;
}
