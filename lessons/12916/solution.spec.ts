import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("pPoooyY");
        const expect = true;
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("Pyy");
        const expect = false;
        deepStrictEqual(actual, expect);
    });
});
