export function solution(dirs: string): number {
    const set = new Set();
    let x = 0;
    let y = 0;
    for (const dir of dirs) {
        let nextX = x + Number(dir === "R") - Number(dir === "L");
        let nextY = y + Number(dir === "U") - Number(dir === "D");
        if (nextX < -5 || +5 < nextX) continue;
        if (nextY < -5 || +5 < nextY) continue;
        set.add([nextX, nextY, x, y].join());
        set.add([x, y, nextX, nextY].join());
        x = nextX;
        y = nextY;
    }
    return set.size / 2;
}
