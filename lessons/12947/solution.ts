export function solution(n: number): boolean {
    return (
        n %
            n
                .toString()
                .split("")
                .map(Number)
                .reduce((a, b) => a + b) ===
        0
    );
}
