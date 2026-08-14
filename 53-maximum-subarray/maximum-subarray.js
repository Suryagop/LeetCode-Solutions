/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    //KADANE'S ALGORITHM
    let i = 0, maxSum = nums[0], currSum = 0;
    while (i < nums.length) {
        currSum = currSum + nums[i];

        if (currSum > maxSum) {
            maxSum = currSum;
        }

        if (currSum < 0) {
            currSum = 0;
        }


        i++
    }

    return maxSum;
};