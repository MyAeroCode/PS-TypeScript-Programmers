import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(2, 5);
        const expect = [2, 4, 6, 8, 10];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(4, 3);
        const expect = [4, 8, 12];
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(-4, 2);
        const expect = [-4, -8];
        deepStrictEqual(actual, expect);
    });
});
