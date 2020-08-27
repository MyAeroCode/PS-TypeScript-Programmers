export function solution(n: number, words: string[]): number[] {
    const history = new Set();
    for (let i = 0; i < words.length; i++) {
        const prevChar = i === 0 ? "" : words[i - 1][words[i - 1].length - 1];
        const isAppearedBefore = history.has(words[i]);
        const isNotVaild = words[i].startsWith(prevChar) === false;
        if (isAppearedBefore || isNotVaild) {
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }
        history.add(words[i]);
    }
    return [0, 0];
}
