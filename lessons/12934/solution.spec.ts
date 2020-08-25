import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(121);
        const expect = 144;
        deepStrictEqual(actual, expect);
    });

    it("케이스 1", function () {
        const actual = solution(3);
        const expect = -1;
        deepStrictEqual(actual, expect);
    });
});
