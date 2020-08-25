import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("01033334444");
        const expect = "*******4444";
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("027778888");
        const expect = "*****8888";
        deepStrictEqual(actual, expect);
    });
});
