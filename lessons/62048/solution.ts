export function solution(w: number, h: number): number {
    //
    // 값이 너무 커지는 경우,
    // 부동소수점의 한계로 부정확해질 수 있으므로 인라인 계산으로 대체.
    // const inclination = h / w;

    let demaged = 0;
    for (let i = 0; i < w; i++) {
        const demagedSrt = Math.floor((h * i) / w); // inclination * i
        const demagedEnd = Math.ceil((h * (i + 1)) / w); // inclination * (i + 1)
        demaged += demagedEnd - demagedSrt;
    }
    return w * h - demaged;
}
