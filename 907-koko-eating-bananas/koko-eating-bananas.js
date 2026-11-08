/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */



var minEatingSpeed = function (piles, h) {
    function isValid(arr, speed, h) {
        let totalHour = 0;
        for (let i = 0; i < arr.length; i++) {

            totalHour += Math.ceil(arr[i] / speed);
        }
        if (totalHour > h) return false;

        return true;
    }

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