import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("abcde");
        const expect = "c";
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("abcd");
        const expect = "bc";
        strictEqual(actual, expect);
    });
});
