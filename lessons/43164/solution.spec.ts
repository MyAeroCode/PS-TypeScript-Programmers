import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([
            ["ICN", "JFK"],
            ["HND", "IAD"],
            ["JFK", "HND"],
        ]);
        const expect = ["ICN", "JFK", "HND", "IAD"];
        deepStrictEqual(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([
            ["ICN", "SFO"],
            ["ICN", "ATL"],
            ["SFO", "ATL"],
            ["ATL", "ICN"],
            ["ATL", "SFO"],
        ]);
        const expect = ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"];
        deepStrictEqual(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([
            ["ICN", "BBB"],
            ["ICN", "CCC"],
            ["CCC", "DDD"],
            ["DDD", "ICN"],
        ]);
        const expect = ["ICN", "CCC", "DDD", "ICN", "BBB"];
        deepStrictEqual(actual, expect);
    });
});
