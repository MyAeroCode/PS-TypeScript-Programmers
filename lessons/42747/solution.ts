export function solution(citations: number[]) {
    citations.sort((a, b) => a - b);
    for (let i = citations.length - 1; 0 <= i; --i) {
        const r = citations[i];
        const l = citations[i - 1] || -1;
        for (let h = r; l < h; --h) {
            const biggerThanEqaul = citations.length - i;
            if (h <= biggerThanEqaul) return h;
        }
    }
}
