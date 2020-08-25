import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(12345);
        const expect = [5, 4, 3, 2, 1];
        deepStrictEqual(actual, expect);
    });
});
