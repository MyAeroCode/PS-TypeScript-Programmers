export function solution(numbers: number[]): number[] {
    let minNumber = Infinity;
    numbers.forEach((number) => {
        if (number < minNumber) minNumber = number;
    });
    numbers = numbers.filter((val) => val !== minNumber);
    return numbers.length ? numbers : [-1];
}
