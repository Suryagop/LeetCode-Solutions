/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // let i = 1;
    // for (i = 1; i * i <= x; i++) {
    //     if (i * i == x) return i;
    // }
    // return i - 1;

    //Optimized( Binary Search )
    let first = 1, last = x, ans = 0;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (mid <= Math.floor(x / mid)) {            // if(mid * mid <= x){}
            ans = mid;
            first = mid + 1;
        }
        else last = mid - 1;
    }
    return ans;

};