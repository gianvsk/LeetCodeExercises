function majorityElement(nums: number[]): number {

    nums.sort()
    return nums.length > 2 ? 
            nums[Math.round((nums.length-1) / 2)] : nums[0]
};