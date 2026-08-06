/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let frq = map.get(nums[i]) + 1;
            map.set(nums[i], frq);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    for (let value of map.values()) {
        if (value != 1) {
            return true;
        }
    }
    return false;

};