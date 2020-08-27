export function solution(w: string): string {
    //
    // w가 빈 문자열이라면 ""을 반환한다.
    if (w === "") return "";

    //
    // 왼쪽 괄호의 누적합, 오른쪽 괄호의 누적합,
    // 올바른 괄호 문자열 여부를 계산한다.
    const lAcc = [] as number[];
    const rAcc = [] as number[];
    const perf = [] as boolean[];
    let p = Infinity;
    for (let i = 0; i < w.length; i++) {
        lAcc.push((lAcc[i - 1] || 0) + Number(w[i] === "("));
        rAcc.push((rAcc[i - 1] || 0) + Number(w[i] === ")"));
        perf.push((perf[i - 1] === undefined ? true : perf[i - 1]) && lAcc[i] >= rAcc[i]);
        if (lAcc[i] === rAcc[i]) p = Math.min(p, i);
    }

    //
    // w가 이미 올바른 괄호 문자열이라면 그대로 리턴한다.
    if (perf[w.length - 1]) return w;

    //
    // u, v로 나눈다.
    const u = w.substring(0, p + 1);
    const v = w.substring(p + 1);

    //
    // 요구 조건에 맞도록 반환한다.
    if (perf[p]) return u + solution(v);
    return (
        "(" +
        solution(v) +
        ")" +
        u
            .substring(1, u.length - 1)
            .split("")
            .map((c) => (c === ")" ? "(" : ")"))
            .join("")
    );
}
