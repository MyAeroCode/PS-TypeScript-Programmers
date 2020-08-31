//
// 이분탐색을 사용한 풀이
export const solution = (stones: number[], k: number) => {
    return binarySearch(0, 200000000, stones, k);
};

const binarySearch = (min: number, max: number, arr: number[], k: number) => {
    while (min <= max) {
        const middle = (min + max) >> 1;
        let count = 0;
        for (const el of arr) {
            if (el - middle <= 0) {
                count++;
            } else {
                count = 0;
            }
            if (count >= k) break;
        }

        if (count >= k) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }
    return min;
};
