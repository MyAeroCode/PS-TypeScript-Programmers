import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    n: number;
    results: number[][];
    result: number;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            n: 5,
            results: [
                [4, 3],
                [4, 2],
                [3, 2],
                [1, 2],
                [2, 5],
            ],
            result: 2,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { n: arg1, results: arg2, result } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2);
            const expect = result;
            deepStrictEqual(actual, expect);
        });
    }
});
