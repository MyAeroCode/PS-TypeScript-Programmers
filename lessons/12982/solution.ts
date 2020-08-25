export function solution(offers: number[], budget: number): number {
    offers.sort((a, b) => a - b);

    let answer = 0;
    for (const offer of offers) {
        if (budget < offer) break;
        answer++;
        budget -= offer;
    }
    return answer;
}
