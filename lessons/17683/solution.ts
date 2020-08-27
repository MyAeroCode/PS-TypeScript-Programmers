export function solution(m: string, rawMusicInfos: string[]): string {
    //
    // #이 붙은 멜로디를 숫자로 대체하는 함수.
    const sharpTable = ["C#", "D#", "F#", "G#", "A#"];
    function prettify(m: string): string {
        let prittified = m;
        for (let i = 0; i < sharpTable.length; ++i) {
            prittified = prittified.replace(new RegExp(sharpTable[i], "g"), i.toString());
        }
        return prittified;
    }

    //
    // 각 곡마다 재생된 멜로디를 계산한다.
    m = prettify(m);
    const musicInfos = rawMusicInfos.map((rawMusicInfo, idx) => {
        let [srtTime, endTime, name, melody] = rawMusicInfo.split(",");
        melody = prettify(melody);

        const [srtH, srtM] = srtTime.split(":").map(Number);
        const [endH, endM] = endTime.split(":").map(Number);
        const playTime = (endH - srtH) * 60 + (endM - srtM);
        const playedMelody =
            melody.repeat(playTime / melody.length) +
            melody.substring(0, playTime % melody.length);
        return { name, playedMelody, idx };
    });

    //1
    // 재생된 멜로디에 m이 포함된 것만 추출하고,
    // 1차로, 멜로디 길이를 기준으로 내림차순 정렬한다.
    // 2차로, 입력순서를 기준으로 오름차순 정렬한다.
    const candidates = musicInfos
        .filter((a) => a.playedMelody.includes(m))
        .sort((a, b) => {
            if (b.playedMelody.length != a.playedMelody.length) {
                return b.playedMelody.length - a.playedMelody.length;
            } else {
                return a.idx - b.idx;
            }
        });

    return candidates.length ? candidates[0].name : `(None)`;
}
