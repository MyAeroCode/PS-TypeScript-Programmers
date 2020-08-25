export function solution(str: string, n: number): string {
    const isUpper = str.split("").map((char) => /[A-Z]/.test(char));
    return str
        .toLowerCase()
        .split("")
        .map((char, idx) => {
            if (char === " ") return char;
            const nextCharCode = 97 + ((char.charCodeAt(0) - 97 + n) % 26);
            return String.fromCharCode(nextCharCode - (isUpper[idx] ? 32 : 0));
        })
        .join("");
}
