function searchInsert(nums: number[], target: number): number {

    let check = false
    let length = nums.length

    for (let i = 0; i < length; i++) {
        if (nums[i] === target) {
            check = true
            return i
        }
    }

    if (check === false)
        if (nums.length > 1) {
            for (let i = 0; i < length - 1; i++) {
                if (nums[i] < target && target < nums[i + 1]) return i + 1
                else if (target < nums[0]) return 0
                else if (target > nums[length - 1]) return length
            }
        } else {
            if (nums[0] < target) return 1
            else return 0
        }
    return 0
};