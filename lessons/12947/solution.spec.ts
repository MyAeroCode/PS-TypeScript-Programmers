import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(10);
        const expect = true;
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(11);
        const expect = false;
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(12);
        const expect = true;
        deepStrictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(13);
        const expect = false;
        deepStrictEqual(actual, expect);
    });
});
