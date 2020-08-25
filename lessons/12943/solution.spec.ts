import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(6);
        const expect = 8;
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(16);
        const expect = 4;
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(626331);
        const expect = -1;
        deepStrictEqual(actual, expect);
    });
});
