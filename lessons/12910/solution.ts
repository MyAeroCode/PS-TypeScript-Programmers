export function solution(numbers: number[], divisor: number): number[] {
    const answer = [] as number[];
    for (const number of numbers) {
        if (number % divisor === 0) {
            answer.push(number);
        }
    }
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
