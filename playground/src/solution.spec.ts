import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(10, 2);
        const expect = [4, 3];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(8, 1);
        const expect = [3, 3];
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(24, 24);
        const expect = [8, 6];
        deepStrictEqual(actual, expect);
    });
});
