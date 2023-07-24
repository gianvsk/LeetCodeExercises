function searchInsert(nums: number[], target: number): number {

    return nums.includes(target) ? 
            nums.indexOf(target) : ( nums.push(target),
                                     nums.sort().indexOf(target)
            )

};

