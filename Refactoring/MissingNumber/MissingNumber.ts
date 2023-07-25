function missingNumber(nums: number[]): number {

    let counter: number = 0
    for (let i = 0; i < nums.length; i++) {
        let diff = false
        for (let j = 0; j < nums.length; j++) {
            if (i === nums[j]) diff = true
        }
        if (diff === false) return counter = i
        else counter = i
    }
    return counter + 1
};