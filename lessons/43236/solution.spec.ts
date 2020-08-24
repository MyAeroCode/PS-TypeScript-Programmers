import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(25, [2, 14, 11, 21, 17], 1);
        const expect = 3;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(25, [2, 14, 11, 21, 17], 2);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(25, [2, 14, 11, 21, 17], 3);
        const expect = 6;
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(25, [2, 14, 11, 21, 17], 4);
        const expect = 11;
        strictEqual(actual, expect);
    });
});
