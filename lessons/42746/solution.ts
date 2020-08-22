export function solution(numbers: number[]) {
    const answer = numbers
        .sort((a, b) => {
            const ab = String(a) + String(b);
            const ba = String(b) + String(a);
            return ab < ba ? +1 : -1;
        })
        .join("");

    return answer[0] === "0" ? "0" : answer;
}
