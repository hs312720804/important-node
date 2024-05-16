/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0
    let str = new Set()
    let right = 0
    for (let left = 0; left < s.length; left++) {
        if (left !== 0) {
            str.delete(s[left-1])
        }
        
        while (right < s.length && !str.has(s[right])) {
            str.add(s[right])
            right++
            
        }
        res = Math.max(res, right - left)
    }
    return res
};

s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))