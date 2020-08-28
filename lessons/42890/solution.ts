export function solution(relation: string[][]): number {
    const colLen = relation[0].length;

    //
    // 주어진 인덱스 번호 배열을 비트마스크로 변환한다.
    function convert2bitmask(columns: number[]) {
        return columns.reduce((prev, current) => prev + 2 ** current, 0);
    }

    //
    // 주어진 인덱스 번호 배열이
    // 최소성을 만족하는 후보키인지 검사한다.
    const uniqueKeys = new Set<number>();
    function isUniqueKey(columns: number[]) {
        //
        // 컬럼 인덱스가 담긴 배열을 비트마스크로 변환한다.
        const bitmask = convert2bitmask(columns);

        //
        // 최소성부터 검사한다.
        for (const uniqueKey of uniqueKeys.keys()) {
            if ((uniqueKey & bitmask) === uniqueKey) {
                return false;
            }
        }

        //
        // 후보키인지 검사한다.
        const appearedBefore = new Set();
        for (const row of relation) {
            const rowKey = columns.map((c) => row[c]).join();
            if (appearedBefore.has(rowKey)) {
                return false;
            }
            appearedBefore.add(rowKey);
        }
        uniqueKeys.add(bitmask);
        return true;
    }

    //
    // 사이즈가 N인 인덱스 번호 조합을 생성한다.
    // 이 조합은 항상 오름차순으로 정렬되어 있다.
    const combiCache = new Map();
    function getCombinations(size: number, untilNow: number[] = []): number[][] {
        //
        // 조합 하나 완성.
        if (size === 0) return [untilNow];

        //
        // 캐싱된 값이 있다면 그것을 활용한다.
        const requestKey = convert2bitmask(untilNow) + "," + size.toString();
        if (combiCache.has(requestKey)) return combiCache.get(requestKey);

        //
        // 재귀로 조합을 생성한다.
        const combinations = [] as number[][];
        const lastNumber =
            untilNow[untilNow.length - 1] === undefined
                ? -1
                : untilNow[untilNow.length - 1];

        for (let nextNumber = lastNumber + 1; nextNumber < colLen; ++nextNumber) {
            const nextCombination = [...untilNow, nextNumber];
            combinations.push(...getCombinations(size - 1, nextCombination));
        }

        //
        // 중복계산하지 않도록 캐싱한다.
        combiCache.set(requestKey, combinations);
        return combinations;
    }

    //
    // 모든 조합을 생성하고, 후보키를 발견할 때 마다 answer을 1늘린다.
    function solve() {
        let answer = 0;
        for (let size = 1; size <= colLen; ++size) {
            const combinations = getCombinations(size);
            for (const combination of combinations) {
                if (isUniqueKey(combination)) {
                    ++answer;
                }
            }
        }
        return answer;
    }

    return solve();
}
