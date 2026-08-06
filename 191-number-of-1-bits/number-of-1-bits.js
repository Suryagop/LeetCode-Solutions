/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let binary = n.toString(2);
    // console.log(binary)
    let count = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            count++;
        }
    }
    return count;

};