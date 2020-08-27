export function solution(msg: string): number[] {
    const dict = {} as { [key: string]: number };

    //
    // 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
    let nextDictIdx = 1;
    while (nextDictIdx < 27) {
        dict[String.fromCharCode(64 + nextDictIdx)] = nextDictIdx;
        ++nextDictIdx;
    }

    const answer = [];
    let srt = 0;
    let len = 1;
    while (srt + len !== msg.length + 1) {
        const w = msg.substring(srt, srt + len);
        if (dict[w] === undefined) {
            const prevW = msg.substring(srt, srt + len - 1);
            dict[w] = nextDictIdx++;
            answer.push(dict[prevW]);
            srt += len - 1;
            len = 1;
        } else {
            ++len;
        }
    }
    answer.push(dict[msg.substring(srt)]);
    return answer;
}
