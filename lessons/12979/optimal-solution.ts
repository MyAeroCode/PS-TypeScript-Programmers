//
// 이전 기지국과 현재 기지국이 겹치면 continue.
// 그렇지 않으면 필요한 기지국의 수를 계산.
function solution(n: number, stations: number[], w: number) {
    var answer = 0;
    var startIndex = 0;
    for (var i = 0; i < stations.length; i++) {
        var toReachIndex = stations[i] - w - 1;
        answer += Math.ceil((toReachIndex - startIndex) / (2 * w + 1));
        startIndex = stations[i] + w;
    }
    answer += Math.ceil((n - startIndex) / (2 * w + 1));
    return answer;
}
