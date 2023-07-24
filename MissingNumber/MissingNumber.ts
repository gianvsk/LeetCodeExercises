function missingNumber(nums: number[]): number {
  
    let numbers = Array.from( {length: nums.length + 1} , (v,i) => i)
    return numbers.reduce((el,acc=0) => acc + el) -nums.reduce((el,acc=0) => acc + el)
              
  };