import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [
                [
                    [1, 4],
                    [3, 2],
                    [4, 1],
                ],
                [
                    [3, 3],
                    [3, 3],
                ],
            ],
            ans: [
                [15, 15],
                [15, 15],
                [15, 15],
            ],
        },
        {
            arg: [
                [
                    [2, 3, 2],
                    [4, 2, 4],
                    [3, 1, 4],
                ],
                [
                    [5, 4, 3],
                    [2, 4, 1],
                    [3, 1, 1],
                ],
            ],
            ans: [
                [22, 22, 11],
                [36, 28, 18],
                [29, 20, 14],
            ],
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg[0], arg[1]);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
