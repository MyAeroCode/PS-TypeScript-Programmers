import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution(["Jane", "Kim"]);
        const expect = "김서방은 1에 있다";
        deepStrictEqual(actual, expect);
    });
});
