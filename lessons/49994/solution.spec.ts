import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: "ULURRDLLU",
            ans: 7,
        },
        {
            arg1: "LULLLLLLU",
            ans: 7,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg1, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
