import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(118372);
        const expect = 873211;
        deepStrictEqual(actual, expect);
    });
});
