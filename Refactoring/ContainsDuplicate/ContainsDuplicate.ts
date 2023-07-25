function containsDuplicate(nums: number[]): boolean {

    for (let i = 0; i < nums.length; i++) {
        let count : number = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) count++
            if (count === 2) return true
        }
    }
    return false
};