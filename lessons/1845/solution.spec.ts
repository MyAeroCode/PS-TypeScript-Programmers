import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [3, 1, 2, 3],
            ans: 2,
        },
        {
            arg: [3, 3, 3, 2, 2, 4],
            ans: 3,
        },
        {
            arg: [3, 3, 3, 2, 2, 2],
            ans: 2,
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
