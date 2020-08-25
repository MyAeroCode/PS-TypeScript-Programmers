export function solution(mm: number, dd: number): string {
    return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
        new Date(`2016-${mm}-${dd}`).getDay()
    ];
}
