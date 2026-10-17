/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let totalsum = 0;
    let pivot;
    for (let i = 0; i < nums.length; i++) {
        totalsum = totalsum + nums[i];
    }
    let leftsum = 0;
    let rightsum = 0;
    for (let i = 0; i < nums.length; i++) {
        rightsum = totalsum - leftsum - nums[i];

        if (leftsum == rightsum) return i;

        leftsum = leftsum + nums[i]

    }
    return -1;
};