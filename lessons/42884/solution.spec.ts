import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    routes: number[][];
    result: number;
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            routes: [
                [-20, 15],
                [-14, -5],
                [-18, -13],
                [-5, -3],
            ],
            result: 2,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { routes, result } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(routes);
            const expect = result;
            deepStrictEqual(actual, expect);
        });
    }
});
