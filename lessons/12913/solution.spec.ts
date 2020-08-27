import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [[1, 2, 3, 4]],
            ans: 4,
        },
        {
            arg: [
                [1, 2, 3, 4],
                [8, 7, 6, 5],
            ],
            ans: 12,
        },
        {
            arg: [
                [1, 2, 3, 5],
                [5, 6, 7, 8],
                [4, 3, 2, 1],
            ],
            ans: 16,
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
