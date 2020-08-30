import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg1: ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"],
            ans: [3, 7],
        },
        {
            arg1: ["AA", "AB", "AC", "AA", "AC"],
            ans: [1, 3],
        },
        {
            arg1: ["XYZ", "XYZ", "XYZ"],
            ans: [1, 1],
        },
        {
            arg1: ["ZZZ", "YYY", "NNNN", "YYY", "BBB"],
            ans: [1, 5],
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
