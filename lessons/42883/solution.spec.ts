import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("1924", 2);
        const expect = "94";
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("1231234", 3);
        const expect = "3234";
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution("4177252841", 4);
        const expect = "775841";
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution("66621169", 1);
        const expect = "6662169";
        strictEqual(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution("66621169", 2);
        const expect = "666269";
        strictEqual(actual, expect);
    });

    it("케이스 6", function () {
        const actual = solution("66621169", 3);
        const expect = "66669";
        strictEqual(actual, expect);
    });

    it("케이스 7", function () {
        const actual = solution("66621169", 4);
        const expect = "6669";
        strictEqual(actual, expect);
    });
});
