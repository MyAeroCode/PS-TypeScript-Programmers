import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(5, [2, 4], [1, 3, 5]);
        const expect = 5;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(5, [2, 4], [3]);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(3, [3], [1]);
        const expect = 2;
        strictEqual(actual, expect);
    });
});
