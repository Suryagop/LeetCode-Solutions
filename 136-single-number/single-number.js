/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {

    // OPTIMIZED SOLUTION 
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans = ans ^ nums[i]
    }
    return ans;

};