export function solution(n: number): number {
    let answer = 0;
    for (let i = 0; i < 500 && n !== 1; i++) {
        n = n % 2 ? n * 3 + 1 : n / 2;
        answer++;
    }
    return answer === 500 ? -1 : answer;
}
