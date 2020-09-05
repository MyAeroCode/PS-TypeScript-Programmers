import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    key: number[][];
    lock: number[][];
    answer: boolean;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            key: [
                [0, 0, 0],
                [1, 0, 0],
                [0, 1, 1],
            ],
            lock: [
                [1, 1, 1],
                [1, 1, 0],
                [1, 0, 1],
            ],
            answer: true,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { key: arg1, lock: arg2, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
