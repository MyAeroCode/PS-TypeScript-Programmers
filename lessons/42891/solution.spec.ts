import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    foodTimes: number[];
    K: number;
    result: number;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            foodTimes: [3, 1, 2],
            K: 5,
            result: 1,
        },
        {
            foodTimes: [3, 1, 1, 1, 2, 4, 3],
            K: 12,
            result: 6,
        },
        {
            foodTimes: [1, 1, 1, 1],
            K: 4,
            result: -1,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { foodTimes, K, result } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(foodTimes, K);
            const expect = result;
            deepStrictEqual(actual, expect);
        });
    }
});
