export function solution(n: number, results: number[][]): number {
    //
    // infos[i].win  => i번 선수가 이겼던 선수들 번호의 Set
    // infos[i].lose => i번 선수가 졌던 선수들 번호의 Set
    const infos = [] as { win: Set<number>; lose: Set<number> }[];
    for (let i = 0; i <= n; i++) {
        infos.push({ win: new Set(), lose: new Set() });
    }

    function addResult(win: number, lose: number) {
        if (win === lose) return;
        if (infos[win].win.has(lose)) return;
        if (infos[lose].lose.has(win)) return;

        infos[win].win.add(lose);
        infos[lose].lose.add(win);

        //
        // win번 선수를 이겼던 선수들은 lose보다 강하다.
        for (const overLevel of infos[win].lose) {
            addResult(overLevel, lose);
        }

        //
        // lose번 선수들에게 졌던 선수들은 win보다 약하다.
        for (const underLevel of infos[lose].win) {
            addResult(win, underLevel);
        }
    }
    results.forEach(([win, lose]) => addResult(win, lose));

    //
    // win.size + lose.size === n - 1 를 만족하는 선수는
    // 명확하게 순위가 결정난 선수이다.
    return infos.filter(({ win, lose }) => win.size + lose.size === n - 1).length;
}
