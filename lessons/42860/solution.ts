export function solution(name: string): number {
    function solve(name: string): number {
        let answer = 0;
        name = name.replace(/A+$/gi, "");
        for (let i = 0; i < name.length; i++) {
            const alphaNum = name.charCodeAt(i) - "A".charCodeAt(0);
            const up = Math.abs(alphaNum - 0);
            const dn = Math.abs(26 - alphaNum);
            answer += Math.min(up, dn);
        }
        answer += Math.max(0, name.length - 1);
        return answer;
    }

    let answer = solve(name);
    for (let i = 0; i < name.length; i++) {
        answer = Math.min(
            answer,
            solve(
                name.substring(0, i + 1) +
                    name
                        .slice(i + 1)
                        .split("")
                        .reverse()
                        .join(""),
            ) + i,
        );
    }
    return answer;
}
