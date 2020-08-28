import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: ["sun", "bed", "car"],
            arg2: 1,
            ans: ["car", "bed", "sun"],
        },
        {
            arg1: ["abce", "abcd", "cdx"],
            arg2: 2,
            ans: ["abcd", "abce", "cdx"],
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
