function singleNumber(nums: number[]): number {

    let prex = 0

    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) count++
        }
        if (count === 1) return nums[i]
    }
    return 0

};