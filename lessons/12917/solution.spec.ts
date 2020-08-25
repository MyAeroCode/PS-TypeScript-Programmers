import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("Zbcdefg");
        const expect = "gfedcbZ";
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("aabbccAABBCC");
        const expect = "ccbbaaCCBBAA";
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution("Z");
        const expect = "Z";
        deepStrictEqual(actual, expect);
    });
});
