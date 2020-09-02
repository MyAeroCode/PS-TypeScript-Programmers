const format2 = (n: number) => (n < 10 ? "0" : "") + n;

export function solution(n: number, t: number, m: number, timetable: string[]): string {
    const busTimetable = [...new Array(n).keys()].map((i) => 540 + i * t);
    const crwArriveCnt = timetable
        .map((rawTimeRow) => {
            const [h, m] = rawTimeRow.split(":");
            return Number(h) * 60 + Number(m);
        })
        .reduce((prv, cur) => {
            if (prv[cur] === undefined) prv[cur] = 0;
            ++prv[cur];
            return prv;
        }, [] as number[]);

    //
    // 앞에서부터 m명씩 태워본다.
    let answer = 0;
    for (const busArriveTime of busTimetable) {
        let passenger = 0;
        let lastCrwArriveTime = 0;
        for (const _crwArriveTime in crwArriveCnt) {
            const crwArriveTime = Number(_crwArriveTime);
            if (busArriveTime < crwArriveTime) break;

            //
            // +)
            // 추가로 여기서 브레이크 안잡으면 lastCrwArriveTime이 틀려짐.
            if (passenger === m) break;
            const accept = Math.min(m - passenger, crwArriveCnt[crwArriveTime]);
            passenger += accept;
            crwArriveCnt[crwArriveTime] -= accept;
            if (crwArriveCnt[crwArriveTime] === 0) delete crwArriveCnt[crwArriveTime];
            lastCrwArriveTime = crwArriveTime;
        }

        //
        // 승객이 꽉 찼는가?
        answer = passenger === m ? lastCrwArriveTime - 1 : busArriveTime;
    }
    return `${format2(Math.floor(answer / 60))}:${format2(answer % 60)}`;
}
