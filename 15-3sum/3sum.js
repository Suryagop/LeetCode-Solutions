/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let ans = [];
    let i = 0;
    while (i < nums.length - 2) {
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] == nums[j - 1]) {
                    j++;
                }
                while (nums[k] == nums[k + 1]) {
                    k--;
                }

            }
            else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            }
            else {
                k--;
            }
        }
        i++;
        if (i != 0) {
            while (nums[i] == nums[i - 1]) {
                i++;
            }
        }
    }

    return ans;
};