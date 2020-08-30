export function solution(commands: string[]): number[] {
    const dequeue = [];
    let needSort = false;
    for (const command of commands) {
        const [op, val] = command.split(" ");
        if (op === "I") {
            dequeue.push(Number(val));
            needSort = true;
        }
        if (op === "D") {
            if (needSort) {
                dequeue.sort((a, b) => b - a);
                needSort = false;
            }
            if (val === "1") dequeue.shift();
            if (val === "-1") dequeue.pop();
        }
    }
    if (needSort) dequeue.sort((a, b) => b - a);
    return [dequeue[0] || 0, dequeue[dequeue.length - 1] || 0];
}
