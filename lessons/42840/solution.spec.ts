import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([1, 2, 3, 4, 5]);
        const expect = [1];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([1, 3, 2, 4, 2]);
        const expect = [1, 2, 3];
        deepStrictEqual(actual, expect);
    });
});
