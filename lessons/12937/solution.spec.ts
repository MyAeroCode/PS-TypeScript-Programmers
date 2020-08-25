import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(0);
        const expect = "Even";
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(1);
        const expect = "Odd";
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(2);
        const expect = "Even";
        deepStrictEqual(actual, expect);
    });
});
