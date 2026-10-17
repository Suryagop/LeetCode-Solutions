/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let current_greatest = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        let current=arr[i]
        arr[i] = current_greatest;
        if (current > current_greatest) {
            current_greatest = current;
        }
    }

    return arr;
};