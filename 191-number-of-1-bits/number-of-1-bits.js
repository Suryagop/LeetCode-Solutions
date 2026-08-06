/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    // let binary = n.toString(2);
    // let count = 0;

    // for (let i = 0; i < binary.length; i++) {
    //     if (binary[i] == 1) {
    //         count++;
    //     }
    // }
    // return count;

    let count = 0;
    while (n > 0) {
        if (n & 1) {   // if(n&1==1)
            count++
        }
        n = n >> 1;

    }
    return count;

};