import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: 5,
            arg2: [1, 2, 5],
            ans: 4,
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
