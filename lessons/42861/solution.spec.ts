import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    n: number;
    costs: number[][];
    answer: number;
};
describe("테스트", function () {
    const data: DataType[] = [
        {
            n: 4,
            costs: [
                [0, 1, 1],
                [0, 2, 2],
                [1, 2, 5],
                [1, 3, 1],
                [2, 3, 8],
            ],
            answer: 4,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { n: arg1, costs: arg2, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
