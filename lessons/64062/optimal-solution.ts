export function solution(stones: number[], k: number): number {
    //
    // 양 옆에 Infinity를 둔다.
    stones.push(Infinity);
    let stack = [{ count: Infinity, idx: -1 }];
    let answer = Infinity;

    for (let i = 0; i < stones.length; i++) {
        //
        // 현재 돌이 구간의 오른쪽이라고 생각한다.
        const right = { count: stones[i], idx: i };

        //
        // 스택에 있는 돌들은 왼쪽에 있는 돌이므로,
        // right보다 내구도가 작다면 left로 가정한 뒤에 꺼내고, 그 구간의 길이가 k를 넘는지 체크한다.
        // answer는 그러한 길이 중 가장 작은값이어야 한다.
        while (stack[stack.length - 1].count < right.count) {
            const mid = stack.pop()!;
            const left = stack[stack.length - 1];
            if (right.idx - left.idx > k) {
                answer = Math.min(answer, mid.count);
            }
        }

        //
        // right를 차기 left로 가정한다.
        stack.push(right);
    }
    return answer;
}
