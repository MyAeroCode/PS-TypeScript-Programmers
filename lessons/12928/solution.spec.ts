import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(12);
        const expect = 28;
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(5);
        const expect = 6;
        deepStrictEqual(actual, expect);
    });
});
