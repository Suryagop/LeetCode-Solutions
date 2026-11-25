/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftproduct = [];
    let rightproduct = [];
    let ans = []
    let product = 1;

    //Left Product
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            leftproduct.push(1);
            continue;
        }
        product = product * nums[i - 1]
        leftproduct.push(product);
    }
    // console.log(leftproduct);

    //Right Product
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) {
            rightproduct.push(1);
            continue;
        }
        product = product * nums[i + 1];
        rightproduct.push(product);
    }
    // console.log(rightproduct);

    //Multiply both arrays
    let i = 0, j = nums.length - 1;
    while (i < nums.length && j >= 0) {
        ans.push(leftproduct[i] * rightproduct[j]);
        i++;
        j--;
    }

    return ans;
};