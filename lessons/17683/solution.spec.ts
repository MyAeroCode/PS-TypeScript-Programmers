import { describe, it } from "mocha";
import { solution } from "./solution";
import { deepStrictEqual } from "assert";

describe("테스트", function () {
    const data = [
        {
            arg: [["ABCDEFG"], ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]],
            ans: "HELLO",
        },
        {
            arg: [
                ["CC#BCC#BCC#BCC#B"],
                ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"],
            ],
            ans: "FOO",
        },
        {
            arg: [["ABC"], ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]],
            ans: "WORLD",
        },
        {
            arg: [["B"], ["12:00,12:10,X,A", "12:10,12:15,Y,B", "12:15,12:20,Z,B"]],
            ans: "Y",
        },
        {
            arg: [["A"], ["12:00,12:10,X,A#"]],
            ans: "(None)",
        },
        {
            arg: [["A"], ["12:59,13:01,X,A", "13:01,13:10,Y,A"]],
            ans: "Y",
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const { arg, ans } = data[i];
        it(`케이스 ${i + 1}`, function () {
            const actual = solution(arg[0][0], arg[1]);
            const expect = ans;
            deepStrictEqual(actual, expect);
        });
    }
});
