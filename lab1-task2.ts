function twoSum(nums: number[], target: number): number[] | null {
    const numIndexMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndexMap[complement] !== undefined) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[nums[i]] = i;
    }

    return null;
}