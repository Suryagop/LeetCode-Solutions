/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    let i = 0, j = i + 1;
    while (i <= n - 2) {
        if (nums[i] == nums[i + 1]) {
            i++;
        }
        else {
            nums[j] = nums[i + 1];
            i++;
            j++;
        }
    }
    return j;



};