/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let ans = [];
    let map = new Map();
    let freq = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            freq = map.get(nums1[i]) + 1;
            map.set(nums1[i], freq);
        }
        else map.set(nums1[i], 1);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i])) {
            ans.push(nums2[i]);
            if (map.get(nums2[i]) == 1) map.delete(nums2[i]);
            else {
                let frq = map.get(nums2[i]) - 1;
                map.set(nums2[i], frq);
            }
        }
    }
    return ans;
};