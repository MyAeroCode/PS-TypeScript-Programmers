import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [8, 4, 7],
            ans: 3,
        },
        {
            arg: [8, 3, 4],
            ans: 1,
        },
        {
            arg: [8, 3, 4],
            ans: 1,
        },
        {
            arg: [8, 6, 8],
            ans: 2,
        },
        {
            arg: [8, 4, 5],
            ans: 3,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg[0], arg[1], arg[2]);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
