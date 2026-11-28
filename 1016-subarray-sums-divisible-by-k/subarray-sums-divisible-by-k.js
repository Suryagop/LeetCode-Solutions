/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {

    let prefixsum = 0, count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixsum += nums[i];

        let remainder = prefixsum % k;

        //If remainder is -ve
        if (remainder < 0) remainder += k;

        if (map.has(remainder)) count += map.get(remainder);

        if (map.has(remainder)) map.set(remainder, map.get(remainder) + 1);
        else map.set(remainder, 1);
    }

    return count;
};