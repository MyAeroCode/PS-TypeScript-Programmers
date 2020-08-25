import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([
            [7],
            [3, 8],
            [8, 1, 0],
            [2, 7, 4, 4],
            [4, 5, 2, 6, 5],
        ]);
        const expect = 30;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([[7]]);
        const expect = 7;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([[7], [3, 8]]);
        const expect = 15;
        strictEqual(actual, expect);
    });
});
