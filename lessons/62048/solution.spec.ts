import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [8, 12],
            ans: 80,
        },
        {
            arg: [2, 3],
            ans: 2,
        },
        {
            arg: [2, 4],
            ans: 4,
        },
        {
            arg: [3, 4],
            ans: 6,
        },
        {
            arg: [3, 5],
            ans: 8,
        },
        {
            arg: [3, 6],
            ans: 12,
        },
        {
            arg: [3, 9],
            ans: 18,
        },
        {
            arg: [1, 1],
            ans: 0,
        },
        {
            arg: [2, 2],
            ans: 2,
        },
    ] as any;

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg[0], arg[1]);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
