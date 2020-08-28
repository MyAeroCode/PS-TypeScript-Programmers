export function solution(nums: number[]): number {
    return Math.min(Math.floor(nums.length / 2), new Set(nums).size);
}
