/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxarea = 0;
    let area = 0;
    let i = 0;
    j = height.length - 1;
    while (i <= j) {
        if (height[i] < height[j]) {
            area = (Math.abs(j - i)) * (height[i])
            i++;
        }
        else {
            area = (Math.abs(i - j)) * height[j];
            j--;
        }

        if (area > maxarea) maxarea = area;
    }

    return maxarea;
};