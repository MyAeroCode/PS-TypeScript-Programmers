export function solution(routes: number[][]): number {
    routes.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    const ranges = [{ srt: routes[0][0], end: routes[0][1] }];
    for (let i = 1; i < routes.length; i++) {
        const prevRange = ranges[ranges.length - 1];
        const thisRange = { srt: routes[i][0], end: routes[i][1] };
        if (thisRange.srt <= prevRange.end) {
            prevRange.end = Math.min(prevRange.end, thisRange.end);
        } else {
            ranges.push(thisRange);
        }
    }
    return ranges.length;
}
