import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [1],
            ans: "1",
        },
        {
            arg: [2],
            ans: "2",
        },
        {
            arg: [3],
            ans: "4",
        },
        {
            arg: [4],
            ans: "11",
        },
        {
            arg: [5],
            ans: "12",
        },
        {
            arg: [6],
            ans: "14",
        },
        {
            arg: [7],
            ans: "21",
        },
        {
            arg: [8],
            ans: "22",
        },
        {
            arg: [9],
            ans: "24",
        },
        {
            arg: [10],
            ans: "41",
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${arg}`, function () {
            const actual = solution(arg[0]);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
