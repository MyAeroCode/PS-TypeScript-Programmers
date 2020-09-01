import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    N: number;
    road: number[][];
    K: number;
    result: number;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            N: 5,
            road: [
                [1, 2, 1],
                [2, 3, 3],
                [5, 2, 2],
                [1, 4, 2],
                [5, 3, 1],
                [5, 4, 2],
            ],
            K: 3,
            result: 4,
        },
        {
            N: 6,
            road: [
                [1, 2, 1],
                [1, 3, 2],
                [2, 3, 2],
                [3, 4, 3],
                [3, 5, 2],
                [3, 5, 3],
                [5, 6, 1],
            ],
            K: 4,
            result: 4,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { N, road, K, result } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(N, road, K);
            const expect = result;
            deepStrictEqual(actual, expect);
        });
    }
});
