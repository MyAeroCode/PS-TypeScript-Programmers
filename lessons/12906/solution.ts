export function solution(numbers: number[]): number[] {
    const answer = [] as number[];
    for (const number of numbers) {
        if (answer[answer.length - 1] !== number) {
            answer.push(number);
        }
    }
    return answer;
}
