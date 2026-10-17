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

    for (let i = 0; i < nums.length; i++) {
        let leftsum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftsum = leftsum + nums[j];

        }

        let rightsum = 0;

        rightsum = totalsum - leftsum - nums[i];

        if (leftsum == rightsum) return i;

    }
    return -1;
};