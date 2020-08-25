import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([1, 3, 2, 5, 4], 9);
        const expect = 3;
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([2, 2, 3, 3], 10);
        const expect = 4;
        deepStrictEqual(actual, expect);
    });
});
