import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(
            [1, 5, 2, 6, 3, 7, 4],
            [
                [2, 5, 3],
                [4, 4, 1],
                [1, 7, 3],
            ],
        );
        const expect = [5, 6, 3];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(
            [1, 30, 4, 21, 100000],
            [
                [2, 4, 1],
                [2, 5, 4],
            ],
        );
        const expect = [4, 100000];
        deepStrictEqual(actual, expect);
    });
});
