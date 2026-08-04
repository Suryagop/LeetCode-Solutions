/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {         // target = x + y
                                                // x = target - y
            ans.push(i);
            ans.push(map.get(target - nums[i]));
        }
        else {
            map.set(nums[i], i);
        }
    }

    return ans;

};