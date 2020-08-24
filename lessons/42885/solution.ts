export function solution(people: number[], limit: number): number {
    //
    // 몸무게별 사람 수를 카운팅한다.
    const weightCnt = [...Array(limit + 1).keys()].map((v) => 0);
    for (const weight of people) weightCnt[weight]++;

    //
    // 몸무게가 i인 사람과 함께 탈 수 있는,
    // 몸무게가 j인 사람을 찾는다.
    let answer = 0;
    for (let i = limit; 0 <= i; i--) {
        //
        // 그러한 사람을 찾았다면, 서로의 카운팅을 낮춘다.
        for (let j = limit - i; 0 <= j && weightCnt[i] !== 0; j--) {
            const joined =
                i === j
                    ? Math.floor(weightCnt[i] / 2)
                    : Math.min(weightCnt[i], weightCnt[j]);

            answer += joined;
            weightCnt[i] -= joined;
            weightCnt[j] -= joined;
        }

        //
        // 아직도 그룹이 안됬다면 혼자서 보트를 사용해야 한다.
        if (0 < weightCnt[i]) {
            const joined = weightCnt[i];
            answer += joined;
            weightCnt[i] = 0;
        }
    }
    return answer;
}
