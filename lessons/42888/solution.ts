export function solution(records: string[]): string[] {
    const nicknameMap = {} as { [key: string]: string };

    //
    // 최종 닉네임 계산
    records.forEach((record) => {
        const [type, uid, nickname] = record.split(" ");
        if (type === "Enter" || type === "Change") {
            nicknameMap[uid] = nickname;
        }
    });

    //
    // 메세지 계산
    return records
        .map((record) => {
            const [type, uid] = record.split(" ");
            if (type === "Enter") return `${nicknameMap[uid]}님이 들어왔습니다.`;
            if (type === "Leave") return `${nicknameMap[uid]}님이 나갔습니다.`;
            return "";
        })
        .filter((msg) => msg.length);
}
