/*
You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

Input: A = [1,3,2,4], B = [3,1,2,4]
Output: [0,2,3,4]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
*/

function findThePrefixCommonArray(A: number[], B: number[]): number[] {

    let c : number[] = []
    let count : number = 0

    for (let k = 0; k < A.length; k++) {
        count = 0
        for (let i = 0; i <= k; i++) {
            for (let j = 0; j <= k; j++) {
                if (A[i] === B[j]) count++
            }
        }
        c.push(count)
    }
    return c
};