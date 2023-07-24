function isPalindrome(x: number): boolean {

    let num = x.toString().split('')
    return num.join() === num.reverse().join() ? true : false
};