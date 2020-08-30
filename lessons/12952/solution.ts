export function solution(n: number): number {
    //
    // qPos[i] => i번째 행에 있는 퀸이 몇 번째 열에 있는지.
    const qPos = Array(n).fill(-1);

    let answer = 0;
    function solve(thisQ: number) {
        if (thisQ === n) {
            ++answer;
            return;
        }
        for (let c = 0; c < n; c++) {
            //
            // 같은 열 체크.
            if (qPos.some((v) => v === c)) continue;

            //
            // 대각 체크.
            if (
                qPos.some((v, i) => {
                    if (v === -1) return false;
                    const isSameLeftUp = v + i === c + thisQ;
                    const isSameRightUp = v - i === c - thisQ;
                    return isSameLeftUp || isSameRightUp;
                })
            )
                continue;

            qPos[thisQ] = c;
            solve(thisQ + 1);
            qPos[thisQ] = -1;
        }
    }

    solve(0);
    return answer;
}
