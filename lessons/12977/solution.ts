export function solution(array: number[]): number {
    const sums = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                sums.push(array[i] + array[j] + array[k]);
            }
        }
    }

    return sums.filter((sum) => {
        if (sum === 0) return false;
        if (sum === 1) return false;
        if (sum === 2) return true;
        for (let i = 2; i <= Math.sqrt(sum); ++i) {
            if (sum % i === 0) return false;
        }
        return true;
    }).length;
}
