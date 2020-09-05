export function solution(key: number[][], lock: number[][]): boolean {
    const M = key.length;
    const N = lock.length;

    //
    // 주어진 정사각 행렬을 시계방향으로 90도 회전한 행렬을 반환한다.
    function rotate(original: number[][]): number[][] {
        const rotated = [...Array(M).keys()].map(() => []) as number[][];
        for (let y = 0; y < M; y++) {
            for (let x = 0; x < M; x++) {
                rotated[x][M - 1 - y] = original[y][x];
            }
        }
        return rotated;
    }

    //
    // 0, 90, 180, 270도 회전한 키의 집합.
    const keys = [key];
    for (let i = 0; i < 3; i++) {
        keys.push(rotate(keys[keys.length - 1]));
    }

    //
    // 반드시 키가 포함해야 할 영역을 구한다.
    const lockMap = lock
        .flatMap((row, y) =>
            row.map((value, x) => ({ x, y, value })).filter((cell) => cell.value === 0),
        )
        .sort((a, b) => {
            if (a.x !== b.x) return a.x - b.x;
            return a.y - b.y;
        });
    const lu = {
        y: Math.min(...lockMap.map((v) => v.y)),
        x: Math.min(...lockMap.map((v) => v.x)),
    };
    const rd = {
        y: Math.max(...lockMap.map((v) => v.y)),
        x: Math.max(...lockMap.map((v) => v.x)),
    };

    //
    // lock[py][px] 지점에 key의 좌측상단을 맞췄을 때 풀린다면 true.
    function test(key: number[][], px: number, py: number) {
        for (let y = 0; y < M; y++) {
            if (y < 0 || M <= y || py + y < 0 || N <= py + y) continue;
            for (let x = 0; x < M; x++) {
                if (x < 0 || M <= x || px + x < 0 || N <= px + x) continue;
                const kv = key[y][x];
                const lv = lock[py + y][px + x];
                if (kv + lv !== 1) return false;
            }
        }
        return true;
    }

    //
    // 반드시 포함해야 할 영역을 벗어나지 않으면서 key를 움직여본다.
    for (let y = rd.y - M + 1; y <= lu.y; y++) {
        for (let x = rd.x - M + 1; x <= lu.x; x++) {
            for (const key of keys) {
                if (test(key, x, y)) {
                    return true;
                }
            }
        }
    }
    return false;
}
solution(
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [0, 0, 1, 0],
    ],
    [
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [1, 0, 1, 0],
        [1, 1, 1, 1],
    ],
);
