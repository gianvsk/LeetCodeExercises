function isPalindrome(x: number): boolean {

    let str : string = x.toString()
    let p : string[] = []
    let j : string[] = []
    let counter = true
    for (let i = 0; i < str.length / 2; i++) {
        if (i !== Math.floor(str.length / 2)) {
            p.push(str[i])
            j.push(str[str.length - 1 - i])
        }
    }
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== j[i]) counter = false
    }
    if(counter) return true
    else return false
};