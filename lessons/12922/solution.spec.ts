import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(1);
        const expect = "수";
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution(2);
        const expect = "수박";
        deepStrictEqual(actual, expect);
    });
    it("케이스 3", function () {
        const actual = solution(3);
        const expect = "수박수";
        deepStrictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution(4);
        const expect = "수박수박";
        deepStrictEqual(actual, expect);
    });
});
