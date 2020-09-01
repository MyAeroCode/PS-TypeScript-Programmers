import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    nodeInfo: number[][];
    result: number[][];
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            nodeInfo: [
                [5, 3],
                [11, 5],
                [13, 3],
                [3, 5],
                [6, 1],
                [1, 3],
                [8, 6],
                [7, 2],
                [2, 2],
            ],
            result: [
                [7, 4, 6, 9, 1, 8, 5, 2, 3],
                [9, 6, 5, 8, 1, 4, 3, 2, 7],
            ],
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { nodeInfo, result } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(nodeInfo);
            const expect = result;
            deepStrictEqual(actual, expect);
        });
    }
});
