export function solution(str: string): number {
    function compress(size: number): string {
        let remain = str;
        const tokens = [];
        while (size <= remain.length) {
            let cnt = 0;
            const word = remain.substring(0, size);
            while (remain.startsWith(word, size * cnt)) cnt++;
            remain = remain.substring(size * cnt);
            tokens.push(`${cnt === 1 ? "" : cnt}${word}`);
        }
        tokens.push(remain);
        return tokens.join("");
    }

    return [...Array(str.length).keys()]
        .map((size) => compress(size + 1).length)
        .reduce((a, b) => Math.min(a, b), Infinity);
}
