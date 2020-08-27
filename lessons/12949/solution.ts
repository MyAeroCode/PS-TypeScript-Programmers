export function solution(a: number[][], b: number[][]): number[][] {
    const answer = [];
    for (let i = 0; i < a.length; i++) {
        let row = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        answer.push(row);
    }
    return answer;
}
