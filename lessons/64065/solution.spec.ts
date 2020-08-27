import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: "{{2},{2,1},{2,1,3},{2,1,3,4}}",
            ans: [2, 1, 3, 4],
        },
        {
            arg: "{{1,2,3},{2,1},{1,2,4,3},{2}}",
            ans: [2, 1, 3, 4],
        },
        {
            arg: "{{20,111},{111}}",
            ans: [111, 20],
        },
        {
            arg: "{{123}}",
            ans: [123],
        },
        {
            arg: "{{4,2,3},{3},{2,3,4,1},{2,3}}",
            ans: [3, 2, 4, 1],
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
