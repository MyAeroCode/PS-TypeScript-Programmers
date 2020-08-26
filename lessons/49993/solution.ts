export function solution(skill: string, skillTrees: string[]): number {
    return skillTrees.filter((slillTree) => {
        const order = skill.split("").map((skill) => {
            const which = slillTree.indexOf(skill);
            return which < 0 ? Infinity : which;
        });

        for (let i = 0; i < order.length - 1; i++) {
            if (order[i] > order[i + 1]) {
                return false;
            }
        }
        return true;
    }).length;
}
