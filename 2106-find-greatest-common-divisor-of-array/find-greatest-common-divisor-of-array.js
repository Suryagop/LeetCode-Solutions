/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let a = Math.min(...nums);
    let b = Math.max(...nums);
    // console.log(a,b)
    for (let i = a; i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            return i;
            break;
        }
    }

};