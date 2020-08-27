import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [
                3,
                [
                    "tank",
                    "kick",
                    "know",
                    "wheel",
                    "land",
                    "dream",
                    "mother",
                    "robot",
                    "tank",
                ],
            ],
            ans: [3, 3],
        },
        {
            arg: [
                5,
                [
                    "hello",
                    "observe",
                    "effect",
                    "take",
                    "either",
                    "recognize",
                    "encourage",
                    "ensure",
                    "establish",
                    "hang",
                    "gather",
                    "refer",
                    "reference",
                    "estimate",
                    "executive",
                ],
            ],
            ans: [0, 0],
        },
        {
            arg: [2, ["hello", "one", "even", "never", "now", "world", "draw"]],
            ans: [1, 3],
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg[0] as any, arg[1] as any);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
