import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: 6,
            arg2: [
                [3, 6],
                [4, 3],
                [3, 2],
                [1, 3],
                [1, 2],
                [2, 4],
                [5, 2],
            ],
            ans: 3,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg1, arg2, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
