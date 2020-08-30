function solution(gems: string[]) {
    const gemVarietyCounts = new Set(gems).size;
    const gemMap = new Map<string, number>();

    let ansSrt = 0;
    let ansEnd = gems.length + 1;

    //
    // 가장 오래된 항목을 map.values().next().value로 확인할 수 있다.
    gems.forEach((gem, i) => {
        gemMap.delete(gem);
        gemMap.set(gem, i);

        if (gemMap.size === gemVarietyCounts) {
            const srt = gemMap.values().next().value + 1;
            const end = i + 1;

            //
            // 새롭게 찾은 정답 구간이 짧으면, 그것으로 갱신.
            if (end - srt < ansEnd - ansSrt) {
                ansSrt = srt;
                ansEnd = end;
            }
        }
    });

    return [ansSrt, ansEnd];
}
