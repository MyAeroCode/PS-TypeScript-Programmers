export function solution(N: number, stages: number[]): number[] {
    //
    // 각 스테이지의 진행중인 사람(num)과 통과한 사람(den)의 수를 계산한다.
    const numberator = new Array(N + 2).fill(0);
    const denominator = new Array(N + 2).fill(0);
    stages.forEach((stage) => numberator[stage]++);
    denominator[N + 1] = numberator[N + 1];
    for (let i = N; 1 <= i; i--) {
        denominator[i] = numberator[i] + denominator[i + 1];
    }

    //
    // 각 스테이지의 실패율을 계산하고,
    // 실패율로 내림차순, 스테이지 번호로 오름차순 정렬한다.
    return [...Array(N + 2).keys()]
        .map((stage) => ({
            stage: stage,
            failRate:
                denominator[stage] === 0
                    ? denominator[stage]
                    : numberator[stage] / denominator[stage],
        }))
        .slice(1, N + 1)
        .sort((a, b) => {
            if (a.failRate !== b.failRate) return b.failRate - a.failRate;
            return a.stage - b.stage;
        })
        .map((v) => v.stage);
}
