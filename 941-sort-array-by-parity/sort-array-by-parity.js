/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let i = 0, j = nums.length - 1;

    while (i < j) {
        if (nums[j] % 2 == 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        else j--;
    }
    return nums;

};