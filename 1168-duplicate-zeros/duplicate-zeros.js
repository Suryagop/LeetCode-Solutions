/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let i = arr.length - 1;
    let j, count = 0;

    for (let k = 0; k < arr.length; k++) {
        if (arr[k] == 0) {
            count++;
        }
    }

    j = (arr.length - 1) + count

    while (i >= 0) {

        if (j < arr.length) {
            arr[j] = arr[i];
        }
        j--;

        if (arr[i] == 0) {
            if (j < arr.length) {
                arr[j] = 0;
            }
            j--;
        }
        i--;
    }

};