import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
        const expect = "LRLLLRLLRRL";
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
        const expect = "LRLLRRLLLRR";
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
        const expect = "LLRLLRLLRL";
        deepStrictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution([3, 5], "left");
        const expect = "RR";
        deepStrictEqual(actual, expect);
    });
});
