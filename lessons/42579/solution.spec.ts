import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(
            ["c", "p", "c", "c", "p"],
            [500, 600, 150, 800, 2500],
        );
        const expect = [4, 1, 3, 0];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(
            ["c", "p", "c", "c", "p"],
            [500, 600, 800, 800, 2500],
        );
        const expect = [4, 1, 2, 3];
        deepStrictEqual(actual, expect);
    });
});
