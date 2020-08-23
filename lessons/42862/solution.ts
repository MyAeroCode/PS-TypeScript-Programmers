export function solution(
    n: number,
    lost: number[],
    reserve: number[],
): number {
    const students: {
        idx: number;
        cnt: number;
    }[] = [];
    for (let i = 0; i < n; i++) {
        students[i] = {
            idx: i,
            cnt: 1,
        };
    }
    lost.forEach((i) => students[i - 1].cnt--);
    reserve.forEach((i) => students[i - 1].cnt++);

    for (let i = 0; i < n; i++) {
        if (students[i].cnt === 0) {
            for (const d of [+1, -1]) {
                if (students[i - d] && 1 < students[i - d].cnt) {
                    students[i].cnt++;
                    students[i - d].cnt--;
                    break;
                }
            }
        }
    }
    return students.filter((s) => 1 <= s.cnt).length;
}
