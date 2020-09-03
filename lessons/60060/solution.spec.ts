import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    words: string[];
    queries: string[];
    answer: number[];
};
describe("테스트", function () {
    const data: DataType[] = [
        {
            words: ["frodo", "front", "frost", "frozen", "frame", "kakao"],
            queries: ["fro??", "????o", "fr???", "fro???", "pro?"],
            answer: [3, 2, 4, 1, 0],
        },
        {
            words: ["aaaa", "bbbb", "cccc", "abcd", "dbca"],
            queries: ["????", "?aaa", "???a", "???x", "?????"],
            answer: [5, 1, 2, 0, 0],
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { words: arg1, queries: arg2, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
