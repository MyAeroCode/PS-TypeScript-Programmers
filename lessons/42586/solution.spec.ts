import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([93, 30, 55], [1, 30, 5]);
        const expect = [2, 1];
        deepStrictEqual(actual, expect);
    });
});
