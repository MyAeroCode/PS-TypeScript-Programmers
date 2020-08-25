import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(5, 24);
        const expect = "TUE";
        strictEqual(actual, expect);
    });
});
