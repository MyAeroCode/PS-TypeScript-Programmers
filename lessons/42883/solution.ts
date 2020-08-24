export function solution(number: string, k: number): string {
    const elems = number
        .split("")
        .map(Number)
        .map((v, i, arr) => ({
            //
            // 해당 원소의 값.
            v,

            //
            // 몇을 더해야 다음 원소가 되는가를 가르키며, 0보다 크다면 제거대상이다.
            // 마지막 원소의 델타값은 의미를 갖지 않으며(NaN), 제거된 원소는 음의 무한대를 갖는다.
            delta: arr[i + 1] - v,
        }));

    let delCnt = 0;
    const prevElemIdxStack = [];
    const jumpElemIdxStack = [];
    for (let i = 0; i < elems.length - 1 && delCnt !== k; ) {
        const thisElem = elems[i];

        //
        // 현재 원소의 델타값이 양수라면 제거대상이다.
        // 이전 원소의 델타값을 재계산하고, 현재 원소를 제거했다는 흔적을 기록한다.
        if (0 < thisElem.delta) {
            const prevElemIdx = prevElemIdxStack.pop();
            if (prevElemIdx !== undefined) {
                elems[prevElemIdx].delta += thisElem.delta;
                jumpElemIdxStack.push(i + 1);
                i = prevElemIdx;
            } else i++;

            thisElem.v = -1;
            thisElem.delta = -Infinity;
            delCnt++;
        }
        //
        // 델타값이 음의 무한대가 아니라면 제거대상이 아닌 유효한 숫자이다.
        // 원소를 제거할 때, 제거되지 않은 직전원소 위치를 계산해야 하므로 스택에 넣는다.
        else if (thisElem.delta !== -Infinity) {
            prevElemIdxStack.push(i);
            i++;
        }
        //
        // 음의 무한대를 발견했다면, 여기서부터 음의 무한대 구간이 나올 확률이 높다.
        // 시간을 빼앗기면 안되므로, 미리 저장해두었던 마지막 유효숫자 위치를 불러온다.
        else {
            i = jumpElemIdxStack.pop()!;
        }
    }

    return elems
        .filter((elem) => 0 <= elem.v)
        .slice(0, number.length - k) // 제거대상의 개수가 k보다 적을 수 있다.
        .map((elem) => elem.v)
        .join("");
}
