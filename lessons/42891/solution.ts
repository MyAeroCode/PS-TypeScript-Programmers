export function solution(foodTimes: number[], k: number): number {
    //
    // cntOfTimes[t] = foodTime이 t인 음식의 개수
    let cntOfTimes = [] as number[];
    for (const foodTime of foodTimes) {
        if (cntOfTimes[foodTime] === undefined) {
            cntOfTimes[foodTime] = 0;
        }
        ++cntOfTimes[foodTime];
    }

    //
    // 지금까지 남은 음식 중, 가장 낮은 foodTime을 가진 음식을 찾아,
    // k를 점점 낮추어 간다.
    let currentFood = foodTimes.length;
    let prevMinTime = 0;
    for (const _minFoodTime in cntOfTimes) {
        const thisMinTime = Number(_minFoodTime);
        const rangeLength = thisMinTime - prevMinTime;
        const canIterate = rangeLength * currentFood;
        if (k < canIterate) {
            return foodTimes
                .map((v, i) => ({ v, i: i + 1 }))
                .filter((food) => thisMinTime <= food.v)[k % currentFood].i;
        }
        k -= canIterate;
        prevMinTime = thisMinTime;
        currentFood -= cntOfTimes[thisMinTime];
    }
    return -1;
}
