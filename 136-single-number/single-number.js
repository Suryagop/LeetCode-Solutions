/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let frq = map.get(nums[i]) + 1;
            map.set(nums[i], frq);
        }
        else {
            map.set(nums[i], 1)
        }
    }

    for (let key of map.keys()) {
        if (map.get(key) == 1) {
            return key;
        }
    }

};