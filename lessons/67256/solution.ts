type PhoneBtn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "*" | "#";

export function solution(numbers: PhoneBtn[], hand: "right" | "left"): string {
    function getDiff(from: PhoneBtn, to: PhoneBtn) {
        function getY(num: PhoneBtn) {
            if (num === "*") return 4;
            if (num === "#") return 4;
            if (num === 0) return 4;
            return Math.floor((num + 2) / 3);
        }
        function getX(num: PhoneBtn) {
            if (num === "*") return 1;
            if (num === "#") return 3;
            if (num === 0) return 2;
            return num % 3 === 0 ? 3 : num % 3;
        }
        return Math.abs(getY(from) - getY(to)) + Math.abs(getX(from) - getX(to));
    }

    const history = [] as ("L" | "R")[];
    const curBtn = ["*", "#"] as PhoneBtn[];
    for (const number of numbers) {
        let handIdx = 0;
        if (0 <= [1, 4, 7].indexOf(number as any)) handIdx = 0;
        if (0 <= [3, 6, 9].indexOf(number as any)) handIdx = 1;
        if (0 <= [2, 5, 8, 0].indexOf(number as any)) {
            const ldiff = getDiff(curBtn[0], number);
            const rdiff = getDiff(curBtn[1], number);
            if (ldiff === rdiff) handIdx = Number(hand === "right");
            else handIdx = Number(ldiff > rdiff);
        }

        history.push(handIdx === 0 ? "L" : "R");
        curBtn[handIdx] = number;
    }

    return history.join("");
}
