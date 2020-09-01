import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: 11,
            arg2: [4, 11],
            arg3: 1,
            ans: 3,
        },
        {
            arg1: 16,
            arg2: [9],
            arg3: 2,
            ans: 3,
        },
        {
            arg1: 5,
            arg2: [3],
            arg3: 2,
            ans: 0,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg1, arg2, arg3, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2, arg3);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
