export function solution(str: string): number[] {
    const isChecked = new Set();
    return (JSON.parse(str.replace(/\{/g, "[").replace(/\}/g, "]")) as number[][])
        .sort((a, b) => a.length - b.length)
        .map((set) => {
            for (const num of set) {
                if (isChecked.has(num)) continue;
                return isChecked.add(num), num;
            }
            return -1;
        });
}
