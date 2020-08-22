export function solution(answers: number[]): number[] {
    function repeatArray(array: number[], howMany: number): number[] {
        const repeated = [];
        for (let i = 0; i < howMany; ++i) repeated.push(...array);
        return repeated;
    }

    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    const submitted: number[][] = [];
    for (const pattern of patterns) {
        submitted.push(
            repeatArray(
                pattern,
                Math.ceil(answers.length / pattern.length),
            ),
        );
    }

    const score = [0, 0, 0];
    let maxScore = 0;
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (submitted[j][i] === answers[i]) score[j]++;
            if (maxScore < score[j]) maxScore = score[j];
        }
    }

    const answer = [];
    for (let i = 0; i < 3; i++) {
        if (score[i] === maxScore) answer.push(i + 1);
    }
    return answer;
}
