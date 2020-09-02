export function solution(word: string, pages: string[]): number {
    //
    // 정규식
    const curPageLinkRex = /<meta property="og:url" content="(.+?)"/gis; // 괜히 범위 넓게잡지 말기
    const extPageLinkRex = /<a href="(.+?)">/gis;
    const findWordRex = new RegExp(`(?<![a-z])${word}(?![a-z])`, "gi");

    //
    // pageLinks[url] = url로 연결된 링크가 있는 페이지의 Set
    const pageLinks = {} as { [key: string]: Set<string> };
    const pageInfos = {} as {
        [key: string]: { base: number; ext: number; extLinkCnt: number; index: number };
    };

    //
    // 각 페이지의 주소, 외부링크, 기본점수 계산
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        //
        // 현재 주소
        curPageLinkRex.lastIndex = 0;
        const curPageLink = curPageLinkRex.exec(page)![1];

        //
        // 외부 링크
        let extLinkCnt = 0;
        extPageLinkRex.lastIndex = 0;
        while (true) {
            const extPageLinkResult = extPageLinkRex.exec(page);
            if (extPageLinkResult === null) break;
            const extPageLink = extPageLinkResult[1];
            if (pageLinks[extPageLink] === undefined) {
                pageLinks[extPageLink] = new Set();
            }
            pageLinks[extPageLink].add(curPageLink);
            extLinkCnt++;
        }

        //
        // 기본점수
        findWordRex.lastIndex = 0;
        const wordMatchs = page.match(findWordRex);
        const baseScore = wordMatchs ? wordMatchs.length : 0;
        pageInfos[curPageLink] = { base: baseScore, ext: 0, extLinkCnt, index: i };
    }

    //
    // 링크점수 계산
    for (const link in pageInfos) {
        if (pageLinks[link] === undefined) continue;
        for (const linkedPage of pageLinks[link]) {
            const { base, extLinkCnt } = pageInfos[linkedPage];
            pageInfos[link].ext += base / extLinkCnt;
        }
    }

    //
    // 총합점수가 높은 페이지의 인덱스 계산.
    // 점수가 같다면 인덱스가 빠른 것을 선택.
    return Object.values(pageInfos).sort((a, b) => {
        const aScore = a.base + a.ext;
        const bScore = b.base + b.ext;
        if (aScore !== bScore) return bScore - aScore;
        return a.index - b.index;
    })[0].index;
}

solution("Muzi", [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
]);
