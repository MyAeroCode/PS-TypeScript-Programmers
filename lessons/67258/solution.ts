export function solution(gems: string[]): number[] {
    //
    // 보석의 종류의 개수를 파악하고,
    // 각각의 보석에 대해 인덱스 번호를 부여.
    const kinds = new Set(gems);
    const kindsN = kinds.size;
    const gemIdx = {} as { [gemName: string]: number };
    let idx = 0;
    for (const kind of kinds) gemIdx[kind] = idx++;
    const numberizeGems = gems.map((gem) => gemIdx[gem]);

    //
    // 부족한 보석의 인덱스 번호를 반환.
    // 부족한 보석이 없다면 -1를 반환.
    function getFirstLack(selected: number[]): number {
        for (let i = 0; i < selected.length; i++) {
            if (selected[i] === 0) return i;
        }
        return -1;
    }

    //
    // 슬라이딩 윈도우
    let s = 0;
    let e = 0;
    let result = [0, numberizeGems.length];
    const selected = Array(kinds.size).fill(0);
    while (true) {
        //
        // 첫 번째로 부족한 보석의 번호.
        const lack = getFirstLack(selected);

        //
        // (시간초과 개선 핵심)
        // 첫 번째로 부족한 보석이 포함될 때 까지 e를 이동시켜 범위를 확장한다.
        if (0 <= lack) {
            let isFound = false;
            while (true) {
                if (e === numberizeGems.length) break;
                if (numberizeGems[e] === lack) {
                    selected[numberizeGems[e++]]++;
                    isFound = true;
                    break;
                }
                selected[numberizeGems[e++]]++;
            }
            if (!isFound) break;
        }
        //
        // 보석이 많다면 s를 이동시켜서 범위를 축소.
        else {
            if (e - s < result[1] - result[0]) result = [s, e];
            selected[numberizeGems[s++]]--;
        }
    }
    return [result[0] + 1, result[1]];
}
