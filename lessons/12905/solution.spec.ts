import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [
                [0, 1, 1, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [0, 0, 1, 0],
            ],
            ans: 9,
        },
        {
            arg: [
                [0, 0, 1, 1],
                [1, 1, 1, 1],
            ],
            ans: 4,
        },
        {
            arg: [[0]],
            ans: 0,
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
