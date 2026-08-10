/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let a = Math.min(...nums);
    let b = Math.max(...nums);

    //BRUTE FORCE 

    // for (let i = a; i >= 1; i--) {
    //     if (a % i == 0 && b % i == 0) {
    //         return i;
    //         break;
    //     }
    // }

    function gcd(a, b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    return gcd(a, b)

};