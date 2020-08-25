export function solution(
    begin: string,
    target: string,
    words: string[],
): number {
    function isTransformable(str1: string, str2: string): boolean {
        let diff = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) diff++;
        }
        return diff === 1;
    }

    const queue = [{ str: begin, cnt: 0 }];
    const isChecked = {} as { [key: string]: boolean };
    while (queue.length) {
        const thisStr = queue.pop()!;
        isChecked[thisStr.str] = true;
        for (const w of words) {
            if (isChecked[w] !== undefined) continue;
            if (isTransformable(thisStr.str, w)) {
                isChecked[w] = true;
                queue.push({ str: w, cnt: thisStr.cnt + 1 });
                if (w === target) return thisStr.cnt + 1;
            }
        }
    }
    return 0;
}
