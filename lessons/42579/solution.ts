interface Entity {
    idx: number;
    play: number;
}

export function solution(types: string[], plays: number[]): number[] {
    //
    // 보기좋게 맵에 담는다.
    const dataMap = new Map<string, Entity[]>();
    for (let idx = 0; idx < types.length; idx++) {
        const type = types[idx];
        const play = plays[idx];
        if (!dataMap.get(type)) dataMap.set(type, []);
        dataMap.get(type)!.push({ idx, play });
    }

    //
    // 각 장르별 음악정보들을 묶어서 배열에 삽입한다.
    const dataArray = [...dataMap.values()];

    //
    // 가장 많이 재생된 장르별로 정렬한다.
    dataArray.sort((aTypeMusics, bTypeMusics) => {
        let aPlayed = 0,
            bPlayed = 0;
        for (const aMusic of aTypeMusics) aPlayed += aMusic.play;
        for (const bMusic of bTypeMusics) bPlayed += bMusic.play;
        return bPlayed - aPlayed;
    });

    //
    // 각 장르별 음악을 [가장많이재생된순, 번호가빠른순]으로 정렬한다.
    dataArray.forEach((musics) => {
        musics.sort((a, b) => {
            if (a.play !== b.play) return b.play - a.play;
            return a.idx - b.idx;
        });
    });

    //
    // 각 장르별 음악을 최대 2개씩만 골라낸다.
    const filteredDataArray = dataArray.map((a) => a.slice(0, 2));
    const answer: number[] = [];
    filteredDataArray.forEach((x) =>
        x.forEach((y) => answer.push(y.idx)),
    );

    return answer;
}
