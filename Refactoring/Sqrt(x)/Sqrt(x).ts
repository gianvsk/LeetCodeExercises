function mySqrt(x: number): number {

    let j = 0
    let k = 0
    if (x > 3) {
        while (j <= x) {
            k += 1
            j = k * k
        }
        return k - 1
    }
    else if (x < 4 && x > 0) return k + 1
    else return k
};