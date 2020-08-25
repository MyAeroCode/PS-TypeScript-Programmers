export function solution(n: number): number {
    let answer = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            answer += i;
            answer += n / i;
            if (i === n / i) answer -= i;
        }
    }
    return answer;
}
