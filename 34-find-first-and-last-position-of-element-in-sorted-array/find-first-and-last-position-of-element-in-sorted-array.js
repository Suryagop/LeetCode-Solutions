/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let ans1 = -1, ans2 = -1;  // we are setting start and end position as -1 since no valid index is there initially
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            ans1 = mid;
            end = mid - 1;
        }
        else if (nums[mid] <target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }

    }

    start=0,end=nums.length-1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            ans2 = mid;
            start = mid + 1;
        }
        else if (nums[mid] < target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }

    }

    return [ans1, ans2];
};