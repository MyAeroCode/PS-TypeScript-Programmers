export function solution(
    progresses: number[],
    speeds: number[],
): number[] {
    const needDays = progresses.map((p, i) => {
        return Math.ceil((100 - p) / speeds[i]);
    });

    const answer = [];
    for (let i = 0; i < needDays.length; i++) {
        needDays[i] = Math.max(needDays[i - 1] || -1, needDays[i]);
        needDays[i] === needDays[i - 1]
            ? answer[answer.length - 1]++
            : answer.push(1);
    }
    return answer;
}
