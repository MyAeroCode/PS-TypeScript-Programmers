export function solution(n: number, _costs: number[][]): number {
    _costs.sort((a, b) => a[2] - b[2]);

    //
    // link[srt][end] = srt와 end가 연결되었다면 true, 아니라면 undefined.
    const link = {} as { [srt: number]: boolean[] };
    for (let i = 0; i < n; i++) link[i] = [];

    //
    // srt와 end가 연결되었다고 표기한다.
    // 이로인해 간접적으로 연결된 것에 대해서도 연결되었다고 표기한다.
    function newLink(srt: number, end: number) {
        if (link[srt][end] || link[end][srt]) return;
        link[srt][end] = link[end][srt] = true;
        for (const next in link[srt]) newLink(next as any, srt);
        for (const next in link[srt]) newLink(next as any, end);
        for (const next in link[end]) newLink(next as any, srt);
        for (const next in link[end]) newLink(next as any, end);
    }

    let answer = 0;
    _costs.forEach(([srt, end, directCost]) => {
        if (!link[srt][end]) {
            newLink(srt, end);
            answer += directCost;
        }
    });
    return answer;
}
