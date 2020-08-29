export function solution(logs: string[]): number {
    //
    // 주어진 시각을 밀리세컨드 단위로 변환
    function getTimestamp(h: string, m: string, s: string, ss: string): number {
        return Number(h) * 3600000 + Number(m) * 60000 + Number(s) * 1000 + Number(ss);
    }

    //
    // 로그 문자열에서 필요한 정보를 추출하는 정규식
    const regexp = /(?<=2016-09-15) (\d{2}):(\d{2}):(\d{2}).(\d{3}) (\d)\.?(\d{1,3})?s/;

    //
    // 특정 시점에서의 처리량의 변화량
    const delta = {} as { [t: number]: number };
    logs.forEach((log) => {
        //
        // 필요한 정보를 추출, 가공한다.
        const [_, endH, endM, endS, endSS, durS, rawDurSS] = regexp.exec(log);
        const durSS =
            rawDurSS === undefined
                ? "000"
                : rawDurSS.length === 3
                ? rawDurSS
                : "0".repeat(3 - rawDurSS.length) + rawDurSS;

        //
        // 시작점과 종료점을 밀리세컨드 단위로 구한다.
        // [srt, end]가 요청이 수행되고 있는 시간의 구간이다.
        const end = getTimestamp(endH, endM, endS, endSS);
        const srt = Math.max(end - getTimestamp("0", "0", durS, durSS) + 1, 0);

        //
        // 새로운 요청의 시작점인 srt에서 처리량이 1 늘어남.
        delta[srt] = (delta[srt] || 0) + 1;

        //
        // 해당 요청은 윈도우 [end, end+1000) 에도 포함되므로,
        // 실제 처리량 감소는 end+1000에서 이루어진다.
        delta[end + 1000] = (delta[end + 1000] || 0) - 1;
    });

    let answer = 0;
    let temp = 0;
    for (const t in delta) {
        temp += delta[t];
        if (answer < temp) answer = temp;
    }
    return answer;
}
