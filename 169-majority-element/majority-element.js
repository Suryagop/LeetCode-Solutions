/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let ans = nums[0], count = 1, i = 1;
    while (i < nums.length) {
        if (count == 0) {
            ans = nums[i];
            count = 1;

        }
        else {
            if (nums[i] != ans) {
                count = count - 1
            }
            else count++;

        }
        i++;
    }
    // console.log(ans);
    return ans;
};