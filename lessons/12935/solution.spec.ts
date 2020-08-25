import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([4, 3, 2, 1]);
        const expect = [4, 3, 2];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([10]);
        const expect = [-1];
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([1, 1]);
        const expect = [-1];
        deepStrictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution([7, 1, 9, 5]);
        const expect = [7, 9, 5];
        deepStrictEqual(actual, expect);
    });
});
