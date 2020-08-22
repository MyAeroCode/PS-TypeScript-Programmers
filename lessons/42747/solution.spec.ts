import { describe, it } from "mocha";
import { solution } from "./solution";
import { equal } from "assert";

describe("테스트", function () {
    it("케이스 1", function () {
        const actual = solution([3, 0, 6, 1, 5]);
        const expect = 3;
        equal(actual, expect);
    });

    it("케이스 2", function () {
        const actual = solution([0]);
        const expect = 0;
        equal(actual, expect);
    });

    it("케이스 3", function () {
        const actual = solution([3]);
        const expect = 1;
        equal(actual, expect);
    });

    it("케이스 4", function () {
        const actual = solution([3, 4, 4, 9, 9, 9]);
        const expect = 4;
        equal(actual, expect);
    });

    it("케이스 5", function () {
        const actual = solution([8, 8, 9, 9, 9, 40, 40, 40, 40, 40]);
        const expect = 8;
        equal(actual, expect);
    });
});
