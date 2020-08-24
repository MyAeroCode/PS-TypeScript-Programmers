import { describe, it } from "mocha";
import { solution } from "./solution";
import { strictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution("JAZ");
        const expect = 11;
        strictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution("JAN");
        const expect = 23;
        strictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution("JEROEN");
        const expect = 56;
        strictEqual(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution("AAAA");
        const expect = 0;
        strictEqual(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution("AZZZA");
        const expect = 6;
        strictEqual(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution("ZZAAAZZZA");
        const expect = 11;
        strictEqual(actual, expect);
    });
});
