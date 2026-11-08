/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var isValid = function (arr, speed, h) {
    let totalHour = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % speed) == 0) {
            totalHour += Math.floor(arr[i] / speed);
        }
        else {
            totalHour += Math.floor(arr[i] / speed) + 1;
        }
    }
    if (totalHour > h) return false;

    return true;
}

var minEatingSpeed = function (piles, h) {
    //Binary Search
    let first = 1, last = Math.max(...piles), ans = -1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (isValid(piles, mid, h)) {
            ans = mid;
            last = mid - 1;
        }
        else {
            first = mid + 1;
        }
    }
    return ans;
};