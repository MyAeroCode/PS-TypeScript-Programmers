import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    k: number;
    roomNumbers: number[];
    answer: number[];
};

describe("테스트", function () {
    const data: DataType[] = [
        {
            k: 10,
            roomNumbers: [1, 3, 4, 1, 3, 1],
            answer: [1, 3, 4, 2, 5, 6],
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { k: arg1, roomNumbers: arg2, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
