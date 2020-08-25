import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(3, [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1],
        ]);
        const expect = 2;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(3, [
            [1, 1, 0],
            [1, 1, 1],
            [0, 1, 1],
        ]);
        const expect = 1;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(4, [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [1, 0, 0, 1],
        ]);
        const expect = 1;
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(1, [[1]]);
        const expect = 1;
        strictEqual(actual, expect);
    });
});
