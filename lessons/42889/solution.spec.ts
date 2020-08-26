import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
        const expect = [3, 4, 2, 1, 5];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(4, [4, 4, 4, 4, 4]);
        const expect = [4, 1, 2, 3];
        deepStrictEqual(actual, expect);
    });
});
