function singleNumber(nums: number[]): number {

    nums.sort()
    nums = nums.filter((el, i, arr) => arr.indexOf(el) === i && arr.lastIndexOf(el) === i)
    return nums.length === 1 ? nums[0] : 0

};