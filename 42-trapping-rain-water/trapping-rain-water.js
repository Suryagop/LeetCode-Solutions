/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let total = 0;
    rightMax = height[height.length - 1];
    leftMax = height[0]

    let leftmax = new Array(height.length);
    let rightmax = new Array(height.length);


    for (let i = 0; i < height.length; i++) {
        leftmax[i] = Math.max(leftMax, height[i]);
        leftMax = leftmax[i];
    }

    for (let i = height.length - 1; i >= 0; i--) {
        rightmax[i] = Math.max(rightMax, height[i]);
        rightMax = rightmax[i]
    }

    for (let i = 0; i < height.length; i++) {
        total = total + (Math.min(leftmax[i], rightmax[i])) - height[i];
    }
    console.log(leftmax);
    console.log(rightmax);

    return total;
};