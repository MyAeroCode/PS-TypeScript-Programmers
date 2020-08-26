export function solution(n: number): string {
    const converted = [];
    while (0 < n) {
        const lastDigit = n % 3 || 3;
        if (lastDigit === 1) converted.push(1);
        if (lastDigit === 2) converted.push(2);
        if (lastDigit === 3) converted.push(4);
        n = (n - lastDigit) / 3;
    }
    return converted.reverse().join("");
}
