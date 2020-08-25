import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("hit", "cog", [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog",
        ]);
        const expect = 4;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("hit", "cog", [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
        ]);
        const expect = 0;
        strictEqual(actual, expect);
    });
});
