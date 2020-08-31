import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [
                ["frodo", "fradi", "crodo", "abc123", "frodoc"],
                ["fr*d*", "abc1**"],
            ],
            ans: 2,
        },
        {
            arg: [
                ["frodo", "fradi", "crodo", "abc123", "frodoc"],
                ["*rodo", "*rodo", "******"],
            ],
            ans: 2,
        },
        {
            arg: [
                ["frodo", "fradi", "crodo", "abc123", "frodoc"],
                ["fr*d*", "*rodo", "******", "******"],
            ],
            ans: 3,
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
