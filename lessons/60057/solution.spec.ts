import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: ["aabbaccc"],
            ans: 7,
        },
        {
            arg: ["ababcdcdababcdcd"],
            ans: 9,
        },
        {
            arg: ["abcabcdede"],
            ans: 8,
        },
        {
            arg: ["abcabcabcabcdededededede"],
            ans: 14,
        },
        {
            arg: ["xababcdcdababcdcd"],
            ans: 17,
        },
    ] as any;

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg[0]);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
