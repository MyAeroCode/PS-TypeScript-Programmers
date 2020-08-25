import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(5, 12);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(2, 11);
        const expect = 3;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution(5, 31168);
        const expect = -1;
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(2, 22);
        const expect = 2;
        strictEqual(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution(2, 24);
        const expect = 3;
        strictEqual(actual, expect);
    });
});
