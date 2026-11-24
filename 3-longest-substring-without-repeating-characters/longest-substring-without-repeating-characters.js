/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let set = new Set();
        for (let j = i; j < s.length; j++) {
            if (!set.has(s[j])) {
                set.add(s[j]);
                longest = Math.max(longest, set.size);
            }
            else {
                break;
            }
        }
    }
    return longest;
};