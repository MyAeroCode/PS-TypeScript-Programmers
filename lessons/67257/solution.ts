export function solution(inExprStr: string): number {
    //
    // 주어진 우선순위로 중위표현식을 후위표현식으로 변환한다.
    function in2post(priority: string[]): string[] {
        const priorityMap = {
            "*": 3 - priority.indexOf("*"),
            "+": 3 - priority.indexOf("+"),
            "-": 3 - priority.indexOf("-"),
        };

        const tokens = inExprStr.split(/([\*\+\-])/);
        const postfixExpr = [];
        const opStack = [] as string[];
        for (const token of tokens) {
            if (token === "*" || token === "+" || token === "-") {
                while (true) {
                    const prevOp = opStack[opStack.length - 1];
                    const prevPr =
                        prevOp === undefined
                            ? -1
                            : priorityMap[prevOp as "*" | "+" | "-"];
                    const thisPr = priorityMap[token];
                    if (prevPr < thisPr) {
                        opStack.push(token);
                        break;
                    } else {
                        postfixExpr.push(opStack.pop()!);
                    }
                }
            } else {
                postfixExpr.push(token);
            }
        }
        while (opStack.length) postfixExpr.push(opStack.pop()!);
        return postfixExpr;
    }

    //
    // 후위표현식을 계산한다.
    function calcPostExpr(postExpr: string[]): number {
        const nums = [] as number[];
        for (const token of postExpr) {
            const asNumber = Number(token);
            if (isNaN(asNumber)) {
                const r = nums.pop()!;
                const l = nums.pop()!;
                if (token === "*") nums.push(l * r);
                if (token === "+") nums.push(l + r);
                if (token === "-") nums.push(l - r);
            } else {
                nums.push(Number(token));
            }
        }
        return nums[0];
    }

    //
    // 가능한 모든 연산자 우선순위 조합
    const priorityCombinations = [
        ["*", "+", "-"],
        ["*", "-", "+"],
        ["+", "*", "-"],
        ["+", "-", "*"],
        ["-", "*", "+"],
        ["-", "+", "*"],
    ];

    return priorityCombinations
        .map(in2post)
        .map(calcPostExpr)
        .map(Math.abs)
        .reduce((a, b) => Math.max(a, b), 0);
}
