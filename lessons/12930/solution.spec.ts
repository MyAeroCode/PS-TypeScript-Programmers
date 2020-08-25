import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("try hello world");
        const expect = "TrY HeLlO WoRlD";
        deepStrictEqual(actual, expect);
    });
});
