import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([5, 9, 7, 10], 5);
        const expect = [5, 10];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([2, 36, 1, 3], 1);
        const expect = [1, 2, 3, 36];
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([3, 2, 6], 10);
        const expect = [-1];
        deepStrictEqual(actual, expect);
    });
});
