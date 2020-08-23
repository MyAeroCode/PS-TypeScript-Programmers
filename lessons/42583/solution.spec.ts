import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(2, 10, [7, 4, 5, 6]);
        const expect = 8;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(100, 100, [10]);
        const expect = 101;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(100, 100, [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
        ]);
        const expect = 110;
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(1, 2, [1, 1, 1]);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution(1, 1, [1, 1, 1]);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 6", function () {
        const actual = solution(4, 2, [1, 1, 1, 1]);
        const expect = 10;
        strictEqual(actual, expect);
    });

    it("케이스 7", function () {
        const actual = solution(3, 3, [1, 1, 1]);
        const expect = 6;
        strictEqual(actual, expect);
    });

    it("케이스 8", function () {
        const actual = solution(3, 1, [1, 1, 1]);
        const expect = 10;
        strictEqual(actual, expect);
    });

    it("케이스 9", function () {
        const actual = solution(5, 5, [1, 1, 1, 1, 1, 2, 2]);
        const expect = 14;
        strictEqual(actual, expect);
    });

    it("케이스 10", function () {
        const actual = solution(7, 7, [1, 1, 1, 1, 1, 3, 3]);
        const expect = 18;
        strictEqual(actual, expect);
    });

    it("케이스 11", function () {
        const actual = solution(5, 5, [1, 1, 1, 1, 1, 2, 2, 2, 2]);
        const expect = 19;
        strictEqual(actual, expect);
    });

    it("케이스 12", function () {
        const actual = solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1]);
        const expect = 19;
        strictEqual(actual, expect);
    });
});
