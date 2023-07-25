/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/

function strStr(haystack: string, needle: string): number {

    if(haystack.length > needle.length) {
        for(let i=0; i<haystack.length-(needle.length-1); i++) {
            let count = 0
            for(let j=0; j<needle.length; j++) {
                if(haystack[i+j] !== needle[j]) break;
                else count++
            }
            if(count === needle.length) return i
        }
    
        } else if(haystack.length === needle.length) {
            let count = 0
            for(let i=0 ; i<haystack.length; i++) {
                if(haystack[i] === needle[i]) count++
            }
            if(count === needle.length) return count - needle.length
        }
        
        return -1
    };