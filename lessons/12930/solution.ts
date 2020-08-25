export function solution(str: string): string {
    return str
        .split(" ")
        .map((word) =>
            word
                .split("")
                .map((char, idx) => {
                    return idx % 2 ? char.toLowerCase() : char.toUpperCase();
                })
                .join(""),
        )
        .join(" ");
}
