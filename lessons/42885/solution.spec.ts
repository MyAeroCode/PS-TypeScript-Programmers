import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([70, 50, 80, 50], 100);
        const expect = 3;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([70, 80, 50], 100);
        const expect = 3;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([90], 100);
        const expect = 1;
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(
            [10, 20, 30, 40, 50, 60, 70, 80, 90],
            100,
        );
        const expect = 5;
        strictEqual(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution([60, 50, 40, 39, 30], 70);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 6", function () {
        const actual = solution([100, 100, 50, 50], 100);
        const expect = 3;
        strictEqual(actual, expect);
    });
});
