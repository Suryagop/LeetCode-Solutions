/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1;
    for (i = 1; i * i <= x; i++) {
        if (i * i == x) return i;
    }
    return i - 1;

};