import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    board: number[][];
    answer: number;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            board: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
            answer: 900,
        },
        {
            board: [
                [0, 0, 1, 0],
                [0, 0, 0, 0],
                [0, 1, 0, 1],
                [1, 0, 0, 0],
            ],
            answer: 2100,
        },
        {
            board: [
                [0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 1],
                [0, 1, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0],
            ],
            answer: 3200,
        },
        {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
            ],
            answer: 3800,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { board: arg1, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
