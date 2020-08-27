import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: "KAKAO",
            ans: [11, 1, 27, 15],
        },
        {
            arg: "TOBEORNOTTOBEORTOBEORNOT",
            ans: [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34],
        },
        {
            arg: "ABABABABABABABAB",
            ans: [1, 2, 27, 29, 28, 31, 30],
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
