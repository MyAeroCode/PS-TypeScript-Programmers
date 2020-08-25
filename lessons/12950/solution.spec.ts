import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(
            [
                [1, 2],
                [2, 3],
            ],
            [
                [3, 4],
                [5, 6],
            ],
        );
        const expect = [
            [4, 6],
            [7, 9],
        ];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([[1], [2]], [[3], [4]]);
        const expect = [[4], [6]];
        deepStrictEqual(actual, expect);
    });
});
