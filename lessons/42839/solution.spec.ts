import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("17");
        const expect = 3;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("011");
        const expect = 2;
        strictEqual(actual, expect);
    });
});
