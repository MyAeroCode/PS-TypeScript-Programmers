import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: "()()",
            ans: true,
        },
        {
            arg: "(())()",
            ans: true,
        },
        {
            arg: ")()(",
            ans: false,
        },
        {
            arg: "(()(",
            ans: false,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
