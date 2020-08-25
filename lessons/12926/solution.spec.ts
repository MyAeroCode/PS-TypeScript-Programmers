import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("AB", 1);
        const expect = "BC";
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("z", 1);
        const expect = "a";
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution("a B z", 4);
        const expect = "e F d";
        deepStrictEqual(actual, expect);
    });
});
