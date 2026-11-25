/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == k) count++;
        let sum = nums[i];
        let j = i+1;

        while (j < nums.length) {
            sum = sum + nums[j];
            if (sum == k) {
                count++;
            }
            j++
        }
    }
    return count;
};