import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

type DataType = {
    n: number;
    t: number;
    m: number;
    timetable: string[];
    answer: string;
};
describe("테스트", function () {
    const data: DataType[] = [
        {
            n: 1,
            t: 1,
            m: 5,
            timetable: ["08:00", "08:01", "08:02", "08:03"],
            answer: "09:00",
        },
        {
            n: 2,
            t: 10,
            m: 2,
            timetable: ["09:10", "09:09", "08:00"],
            answer: "09:09",
        },
        {
            n: 2,
            t: 1,
            m: 2,
            timetable: ["09:00", "09:00", "09:00", "09:00"],
            answer: "08:59",
        },
        {
            n: 1,
            t: 1,
            m: 5,
            timetable: ["23:59"],
            answer: "09:00",
        },
        {
            n: 10,
            t: 60,
            m: 45,
            timetable: [
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
                "23:59",
            ],
            answer: "18:00",
        },
        {
            n: 2,
            t: 1,
            m: 3,
            timetable: ["09:00", "09:00", "09:00", "09:00", "09:01"],
            answer: "09:01",
        },
        {
            n: 1,
            t: 1,
            m: 1,
            timetable: ["08:00", "08:01", "08:02", "08:03"],
            answer: "07:59",
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { n: arg1, t: arg2, m: arg3, timetable: arg4, answer } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg1, arg2, arg3, arg4);
            const expect = answer;
            deepStrictEqual(actual, expect);
        });
    }
});
