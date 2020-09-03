import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    n: number;
    answer: number;
};
describe("테스트", function () {
    const data: DataType[] = [
        {
            n: 1,
            answer: 1,
        },
        {
            n: 2,
            answer: 2,
        },
        {
            n: 3,
            answer: 5,
        },
        {
            n: 4,
            answer: 14,
        },
        {
            n: 5,
            answer: 42,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { n: arg1, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
