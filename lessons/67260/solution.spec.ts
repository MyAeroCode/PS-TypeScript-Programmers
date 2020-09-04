import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    n: number;
    path: [number, number][];
    order: [number, number][];
    answer: boolean;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            n: 9,
            path: [
                [0, 1],
                [0, 3],
                [0, 7],
                [8, 1],
                [3, 6],
                [1, 2],
                [4, 7],
                [7, 5],
            ],
            order: [
                [8, 5],
                [6, 7],
                [4, 1],
            ],
            answer: true,
        },
        {
            n: 9,
            path: [
                [8, 1],
                [0, 1],
                [1, 2],
                [0, 7],
                [4, 7],
                [0, 3],
                [7, 5],
                [3, 6],
            ],
            order: [
                [4, 1],
                [5, 2],
            ],
            answer: true,
        },
        {
            n: 9,
            path: [
                [0, 1],
                [0, 3],
                [0, 7],
                [8, 1],
                [3, 6],
                [1, 2],
                [4, 7],
                [7, 5],
            ],
            order: [
                [4, 1],
                [8, 7],
                [6, 5],
            ],
            answer: false,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { n: arg1, path: arg2, order: arg3, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2, arg3);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
