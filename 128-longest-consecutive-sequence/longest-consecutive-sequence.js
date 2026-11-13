/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let longest = 1, count = 1;
    nums.sort((a, b) => a - b);
    // console.log(nums);
    if (nums.length == 0) return 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            count++;
            longest = Math.max(longest, count);
        }
        else if (nums[i] == nums[i - 1]) continue;
        else count = 1;
    }
    return longest;
};