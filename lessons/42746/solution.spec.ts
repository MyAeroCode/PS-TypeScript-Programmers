import { describe, it } from "mocha";
import { solution } from "./solution";
import { equal } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([1, 2, 3, 4, 5, 9, 8, 7, 6]);
        const expect = "987654321";
        equal(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([12, 345]);
        const expect = "34512";
        equal(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([12, 1210, 1211]);
        const expect = "1212111210";
        equal(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution([0, 0, 0]);
        const expect = "0";
        equal(actual, expect);
    });
});
