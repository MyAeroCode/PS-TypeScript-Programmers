export function solution(str: string): number {
    let localAnswers = [];

    //
    // delta === 0 ) 홀수 팰린드롬
    // delta === 1 ) 짝수 팰린드롬
    for (const delta of [0, 1]) {
        let localAnswer = 0;
        let pos = 0;
        let len = 0;

        while (pos + len + delta < str.length) {
            //
            // 현재 팰린드롬에서 더 확장할 수 있는가?
            while (
                str[pos - len] === str[pos + len + delta] &&
                str[pos - len] !== undefined
            ) {
                localAnswer = len++ * 2 + (delta + 1);
            }

            //
            // 다음 팰린드롬을 찾을 때 까지 오른쪽으로 한칸씩 이동한다.
            // 양 끝이 같지 않다면, 명백하게 팰린드롬이 아니며,
            // 양 끝이 같다 하더라도, 팰린드롬인지 다시 체크해야 한다.
            while (true) {
                if (str[pos - len] !== str[pos + len + delta]) {
                    pos++;
                } else {
                    let isPalindrome = true;
                    for (let i = 0; i < len; i++) {
                        if (str[pos - i] !== str[pos + i + delta]) {
                            isPalindrome = false;
                            break;
                        }
                    }
                    if (isPalindrome) break;
                    else pos++;
                }
            }
        }
        localAnswers.push(localAnswer);
    }
    return Math.max(...localAnswers);
}
