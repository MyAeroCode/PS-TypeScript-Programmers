import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([2, 1, 3, 2], 2);
        const expect = 1;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([1, 1, 9, 1, 1, 1], 0);
        const expect = 5;
        strictEqual(actual, expect);
    });
});
