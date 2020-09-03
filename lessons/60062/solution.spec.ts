import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    n: number;
    weaks: number[];
    dists: number[];
    answer: number;
};
describe("테스트", function () {
    const data: DataType[] = [
        {
            n: 12,
            weaks: [1, 5, 6, 10],
            dists: [1, 2, 3, 4],
            answer: 2,
        },
        {
            n: 12,
            weaks: [1, 3, 4, 9, 10],
            dists: [3, 5, 7],
            answer: 1,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { n: arg1, weaks: arg2, dists: arg3, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2, arg3);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
