/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let total = 0, leftmax = 0, rightmax = 0;
    let left = 0;
    let right = height.length - 1;

    while (left <= right) {
        if (leftmax < height[left]) {
            leftmax = height[left];

        }
        if (rightmax < height[right]) {
            rightmax = height[right];

        }

        if (leftmax < rightmax) {
            total += leftmax - height[left];
            left++;
        }
        else {
            total += rightmax - height[right];
            right--;
        }

    }

    return total;

};