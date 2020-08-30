import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: [4, 3, 3],
            arg2: 4,
            ans: 12,
        },
        {
            arg1: [2, 1, 2],
            arg2: 1,
            ans: 6,
        },
        {
            arg1: [1, 1],
            arg2: 3,
            ans: 0,
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
