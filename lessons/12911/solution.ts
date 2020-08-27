export function solution(n: number): number {
    const bs = n.toString(2);
    return parseInt(
        /^1+0*$/.test(bs)
            ? bs.replace(/1(1+)(0*)/, "1$20$1")
            : bs
                  .replace(/^([01]+)01(.*?)$/, "$110-$2")
                  .split("-")
                  .map((token, idx) => {
                      if (idx === 0) return token;
                      return token.split("").reverse().join("");
                  })
                  .join(""),
        2,
    );
}
