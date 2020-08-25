export function solution(str: string): boolean {
    let cnt = {} as { [key: string]: number };
    str.split("").forEach((c) => {
        const lower = c.toLowerCase();
        cnt[lower] = (cnt[lower] || 0) + 1;
    });
    return (cnt["p"] || 0) === (cnt["y"] || 0);
}
