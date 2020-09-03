export function solution(words: string[], queries: string[]): number[] {
    class Tree {
        cnt: number;
        childTree: { [char: string]: Tree };
        constructor() {
            this.cnt = 0;
            this.childTree = {};
        }
    }

    //
    // tree[len] => 문자열 크기가 len에 대해 생성된 인덱스
    const forwardTree = [];
    const backwardTree = [];
    for (const word of words) {
        const wordLen = word.length;
        if (forwardTree[wordLen] === undefined) forwardTree[wordLen] = new Tree();
        if (backwardTree[wordLen] === undefined) backwardTree[wordLen] = new Tree();
        forwardTree[wordLen].cnt++;
        backwardTree[wordLen].cnt++;

        //
        // 정방향과 역방향 인덱스를 생성한다.
        const cases = [
            [word, forwardTree[wordLen]],
            [word.split("").reverse().join(""), backwardTree[wordLen]],
        ] as [string, Tree][];
        for (const [rootWord, rootTree] of cases) {
            let thisTree = rootTree;
            for (const char of rootWord) {
                const { childTree } = thisTree;
                if (childTree[char] === undefined) {
                    childTree[char] = new Tree();
                }
                childTree[char].cnt++;
                thisTree = childTree[char];
            }
        }
    }

    //
    // 마지막 인덱스 트리의 cnt가 해당 쿼리의 정답이다.
    const result = [];
    for (const query of queries) {
        const queryLen = query.length;
        const findForward = query[0] !== "?";
        const rootQuery = findForward ? query : query.split("").reverse().join("");
        const rootTree = findForward ? forwardTree[queryLen] : backwardTree[queryLen];
        if (rootTree) {
            let thisTree = rootTree;
            let thisQueryAnswer = rootTree.cnt;
            for (const char of rootQuery) {
                const { childTree } = thisTree;
                if (childTree[char] === undefined) {
                    if (char !== "?") thisQueryAnswer = 0;
                    break;
                }
                thisTree = thisTree.childTree[char];
                thisQueryAnswer = thisTree.cnt;
            }
            result.push(thisQueryAnswer);
        } else {
            result.push(0);
        }
    }

    return result;
}
